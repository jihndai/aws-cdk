import { Stack, Stage } from '@aws-cdk/core';
import * as assert from './vendored/assert';

/**
 * A number of options to customize the `StackAssertions.assertResource()` API.
 */
export interface AssertResourceOptions {
  /**
   * The part of the CloudFormation Resource that the assertion should match against.
   * @default ResourcePart.PROPERTIES
   */
  readonly part?: ResourcePart;
}

/**
 * See `AssertResourceOptions.part`
 */
export enum ResourcePart {
  /** The entire resource definition in the template, excluding the 'Type' */
  COMPLETE,
  /** The 'Properties' section of the resource definition in the template */
  PROPERTIES,
}

/**
 * Suite of assertions that can be run on a CDK stack.
 * Typically used, as part of unit tests, to validate that the rendered
 * CloudFormation template has expected resources and properties.
 */
export class TemplateAssertions {

  /**
   * Base your assertions on the CloudFormation template synthesized by a CDK `Stack`.
   * @param stack the CDK Stack to run assertions on
   */
  public static fromStack(stack: Stack): TemplateAssertions {
    return new TemplateAssertions(toTemplate(stack));
  }

  /**
   * Base your assertions from an existing CloudFormation template.
   * @param template the CloudFormation template in JSON format as a string
   */
  public static fromTemplate(template: string): TemplateAssertions {
    return new TemplateAssertions(JSON.parse(template));
  }

  private readonly inspector: assert.StackInspector;

  private constructor(template: any) {
    this.inspector = new assert.StackInspector(template);
  }

  /**
   * Assert that the given number of resources of the given type exist in the
   * template.
   * @param type the resource type; ex: `AWS::S3::Bucket`
   * @param count number of expected instances
   */
  public resourceCountIs(type: string, count: number): void {
    const assertion = assert.countResources(type, count);
    assertion.assertOrThrow(this.inspector);
  }

  /**
   * Assert that a resource of the given type and properties exists in the
   * CloudFormation template.
   * @param type the resource type; ex: `AWS::S3::Bucket`
   * @param props the properties of the resource
   * @param options customize how the matching should be performed
   */
  public hasResource(type: string, props: any, options?: AssertResourceOptions): void {
    const part = assertResourcePart(options?.part ?? ResourcePart.PROPERTIES);
    const assertion = assert.haveResource(type, props, part);
    assertion.assertOrThrow(this.inspector);
  }

  /**
   * Assert that the CloudFormation template matches the given value
   * @param expected the expected CloudFormation template as key-value pairs.
   */
  public templateMatches(expected: {[key: string]: any}): void {
    const assertion = assert.matchTemplate(expected);
    assertion.assertOrThrow(this.inspector);
  }
}

function toTemplate(stack: Stack): any {
  const root = stack.node.root;
  if (!Stage.isStage(root)) {
    throw new Error('unexpected: all stacks must be part of a Stage or an App');
  }
  const assembly = root.synth();
  return assembly.getStackArtifact(stack.artifactId).template;
}

function assertResourcePart(part: ResourcePart): assert.ResourcePart {
  switch (part) {
    case ResourcePart.PROPERTIES:
      return assert.ResourcePart.Properties;
    case ResourcePart.COMPLETE:
      return assert.ResourcePart.CompleteDefinition;
    default:
      throw new Error(`unexpected: unrecognized resource part type [${part}]`);
  }
}