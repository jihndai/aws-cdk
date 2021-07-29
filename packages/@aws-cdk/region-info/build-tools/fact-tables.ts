export const AWS_OLDER_REGIONS = new Set([
  'us-east-1',
  'us-west-1',
  'us-west-2',
  'us-gov-west-1',
  'ap-southeast-1',
  'ap-southeast-2',
  'ap-northeast-1',
  'sa-east-1',
  'eu-west-1',
]);

export const AWS_CDK_METADATA = new Set([
  'us-east-2',
  'us-east-1',
  'us-west-1',
  'us-west-2',
  // 'us-gov-east-1',
  // 'us-gov-west-1',
  // 'us-iso-east-1',
  // 'us-isob-east-1',
  'af-south-1',
  'ap-south-1',
  'ap-east-1',
  // 'ap-northeast-3',
  'ap-northeast-2',
  'ap-southeast-1',
  'ap-southeast-2',
  'ap-northeast-1',
  'ca-central-1',
  'cn-north-1',
  'cn-northwest-1',
  'eu-central-1',
  'eu-west-1',
  'eu-west-2',
  'eu-west-3',
  'eu-north-1',
  'eu-south-1',
  'me-south-1',
  'sa-east-1',
]);

/**
 * The hosted zone Id if using an alias record in Route53.
 *
 * @see https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_website_region_endpoints
 */
export const ROUTE_53_BUCKET_WEBSITE_ZONE_IDS: { [region: string]: string } = {
  'af-south-1': 'Z11KHD8FBVPUYU',
  'ap-east-1': 'ZNB98KWMFR0R6',
  'ap-northeast-1': 'Z2M4EHUR26P7ZW',
  'ap-northeast-2': 'Z3W03O7B5YMIYP',
  'ap-northeast-3': 'Z2YQB5RD63NC85',
  'ap-south-1': 'Z11RGJOFQNVJUP',
  'ap-southeast-1': 'Z3O0J2DXBE1FTB',
  'ap-southeast-2': 'Z1WCIGYICN2BYD',
  'ca-central-1': 'Z1QDHH18159H29',
  'eu-central-1': 'Z21DNDUVLTQW6Q',
  'eu-north-1': 'Z3BAZG2TWCNX0D',
  'eu-south-1': 'Z3IXVV8C73GIO3',
  'eu-west-1': 'Z1BKCTXD74EZPE',
  'eu-west-2': 'Z3GKZC51ZF0DB4',
  'eu-west-3': 'Z3R1K369G5AVDG',
  'me-south-1': 'Z1MPMWCPA7YB62',
  'sa-east-1': 'Z7KQH4QJS55SO',
  'us-east-1': 'Z3AQBSTGFYJSTF',
  'us-east-2': 'Z2O1EMRO9K5GLX',
  'us-gov-east-1': 'Z2NIFVYYW2VKV1',
  'us-gov-west-1': 'Z31GFT0UA1I2HV',
  'us-west-1': 'Z2F56UZL2M1ACD',
  'us-west-2': 'Z3BJ6K6RIION7M',
};

interface Region { partition: string, domainSuffix: string }

export const PARTITION_MAP: { [region: string]: Region } = {
  'default': { partition: 'aws', domainSuffix: 'amazonaws.com' },
  'cn-': { partition: 'aws-cn', domainSuffix: 'amazonaws.com.cn' },
  'us-gov-': { partition: 'aws-us-gov', domainSuffix: 'amazonaws.com' },
  'us-iso-': { partition: 'aws-iso', domainSuffix: 'c2s.ic.gov' },
  'us-isob-': { partition: 'aws-iso-b', domainSuffix: 'sc2s.sgov.gov' },
};

// https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-access-logs.html#access-logging-bucket-permissions
export const ELBV2_ACCOUNTS: { [region: string]: string } = {
  'af-south-1': '098369216593',
  'ap-east-1': '754344448648',
  'ap-northeast-1': '582318560864',
  'ap-northeast-2': '600734575887',
  'ap-northeast-3': '383597477331',
  'ap-south-1': '718504428378',
  'ap-southeast-1': '114774131450',
  'ap-southeast-2': '783225319266',
  'ca-central-1': '985666609251',
  'cn-north-1': '638102146993',
  'cn-northwest-1': '037604701340',
  'eu-central-1': '054676820928',
  'eu-north-1': '897822967062',
  'eu-south-1': '635631232127',
  'eu-west-1': '156460612806',
  'eu-west-2': '652711504416',
  'eu-west-3': '009996457667',
  'me-south-1': '076674570225',
  'sa-east-1': '507241528517',
  'us-east-1': '127311923021',
  'us-east-2': '033677994240',
  'us-gov-east-1': '190560391635',
  'us-gov-west-1': '048591011584',
  'us-west-1': '027434742980',
  'us-west-2': '797873946194',
};

// https://aws.amazon.com/releasenotes/available-deep-learning-containers-images
export const DLC_REPOSITORY_ACCOUNTS: { [region: string]: string } = {
  'ap-east-1': '871362719292',
  'ap-northeast-1': '763104351884',
  'ap-northeast-2': '763104351884',
  'ap-south-1': '763104351884',
  'ap-southeast-1': '763104351884',
  'ap-southeast-2': '763104351884',
  'ca-central-1': '763104351884',
  'cn-north-1': '727897471807',
  'cn-northwest-1': '727897471807',
  'eu-central-1': '763104351884',
  'eu-north-1': '763104351884',
  'eu-west-1': '763104351884',
  'eu-west-2': '763104351884',
  'eu-west-3': '763104351884',
  'me-south-1': '217643126080',
  'sa-east-1': '763104351884',
  'us-east-1': '763104351884',
  'us-east-2': '763104351884',
  'us-west-1': '763104351884',
  'us-west-2': '763104351884',
};

// https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html
export const APPMESH_ECR_ACCOUNTS: { [region: string]: string } = {
  'af-south-1': '924023996002',
  'ap-east-1': '856666278305',
  'ap-northeast-1': '840364872350',
  'ap-northeast-2': '840364872350',
  'ap-northeast-3': '840364872350',
  'ap-south-1': '840364872350',
  'ap-southeast-1': '840364872350',
  'ap-southeast-2': '840364872350',
  'ca-central-1': '840364872350',
  'eu-central-1': '840364872350',
  'eu-north-1': '840364872350',
  'eu-south-1': '422531588944',
  'eu-west-1': '840364872350',
  'eu-west-2': '840364872350',
  'eu-west-3': '840364872350',
  'me-south-1': '772975370895',
  'sa-east-1': '840364872350',
  'us-east-1': '840364872350',
  'us-east-2': '840364872350',
  'us-west-1': '840364872350',
  'us-west-2': '840364872350',
};

// https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-extension-versions.html
export const CLOUDWATCH_LAMBDA_INSIGHTS_ARNS: { [key: string]: any } = {
  '1.0.98.0': {
    'us-east-1': 'arn:aws:lambda:us-east-1:580247275435:layer:LambdaInsightsExtension:14',
    'us-east-2': 'arn:aws:lambda:us-east-2:580247275435:layer:LambdaInsightsExtension:14',
    'us-west-1': 'arn:aws:lambda:us-west-1:580247275435:layer:LambdaInsightsExtension:14',
    'us-west-2': 'arn:aws:lambda:us-west-2:580247275435:layer:LambdaInsightsExtension:14',
    'af-south-1': 'arn:aws:lambda:af-south-1:012438385374:layer:LambdaInsightsExtension:8',
    'ap-east-1': 'arn:aws:lambda:ap-east-1:519774774795:layer:LambdaInsightsExtension:8',
    'ap-south-1': 'arn:aws:lambda:ap-south-1:580247275435:layer:LambdaInsightsExtension:14',
    'ap-northeast-2': 'arn:aws:lambda:ap-northeast-2:580247275435:layer:LambdaInsightsExtension:14',
    'ap-southeast-1': 'arn:aws:lambda:ap-southeast-1:580247275435:layer:LambdaInsightsExtension:14',
    'ap-southeast-2': 'arn:aws:lambda:ap-southeast-2:580247275435:layer:LambdaInsightsExtension:14',
    'ap-northeast-1': 'arn:aws:lambda:ap-northeast-1:580247275435:layer:LambdaInsightsExtension:14',
    'ca-central-1': 'arn:aws:lambda:ca-central-1:580247275435:layer:LambdaInsightsExtension:14',
    'cn-north-1': 'arn:aws-cn:lambda:cn-north-1:488211338238:layer:LambdaInsightsExtension:8',
    'cn-northwest-1': 'arn:aws-cn:lambda:cn-northwest-1:488211338238:layer:LambdaInsightsExtension:8',
    'eu-central-1': 'arn:aws:lambda:eu-central-1:580247275435:layer:LambdaInsightsExtension:14',
    'eu-west-1': 'arn:aws:lambda:eu-west-1:580247275435:layer:LambdaInsightsExtension:14',
    'eu-west-2': 'arn:aws:lambda:eu-west-2:580247275435:layer:LambdaInsightsExtension:14',
    'eu-south-1': 'arn:aws:lambda:eu-south-1:339249233099:layer:LambdaInsightsExtension:8',
    'eu-west-3': 'arn:aws:lambda:eu-west-3:580247275435:layer:LambdaInsightsExtension:14',
    'eu-north-1': 'arn:aws:lambda:eu-north-1:580247275435:layer:LambdaInsightsExtension:14',
    'me-south-1': 'arn:aws:lambda:me-south-1:285320876703:layer:LambdaInsightsExtension:8',
    'sa-east-1': 'arn:aws:lambda:sa-east-1:580247275435:layer:LambdaInsightsExtension:14',
  },
  '1.0.89.0': {
    'us-east-1': 'arn:aws:lambda:us-east-1:580247275435:layer:LambdaInsightsExtension:12',
    'us-east-2': 'arn:aws:lambda:us-east-2:580247275435:layer:LambdaInsightsExtension:12',
    'us-west-1': 'arn:aws:lambda:us-west-1:580247275435:layer:LambdaInsightsExtension:12',
    'us-west-2': 'arn:aws:lambda:us-west-2:580247275435:layer:LambdaInsightsExtension:12',
    'ap-south-1': 'arn:aws:lambda:ap-south-1:580247275435:layer:LambdaInsightsExtension:12',
    'ap-northeast-2': 'arn:aws:lambda:ap-northeast-2:580247275435:layer:LambdaInsightsExtension:12',
    'ap-southeast-1': 'arn:aws:lambda:ap-southeast-1:580247275435:layer:LambdaInsightsExtension:12',
    'ap-southeast-2': 'arn:aws:lambda:ap-southeast-2:580247275435:layer:LambdaInsightsExtension:12',
    'ap-northeast-1': 'arn:aws:lambda:ap-northeast-1:580247275435:layer:LambdaInsightsExtension:12',
    'ca-central-1': 'arn:aws:lambda:ca-central-1:580247275435:layer:LambdaInsightsExtension:12',
    'eu-central-1': 'arn:aws:lambda:eu-central-1:580247275435:layer:LambdaInsightsExtension:12',
    'eu-west-1': 'arn:aws:lambda:eu-west-1:580247275435:layer:LambdaInsightsExtension:12',
    'eu-west-2': 'arn:aws:lambda:eu-west-2:580247275435:layer:LambdaInsightsExtension:12',
    'eu-west-3': 'arn:aws:lambda:eu-west-3:580247275435:layer:LambdaInsightsExtension:12',
    'eu-north-1': 'arn:aws:lambda:eu-north-1:580247275435:layer:LambdaInsightsExtension:12',
    'sa-east-1': 'arn:aws:lambda:sa-east-1:580247275435:layer:LambdaInsightsExtension:12',
  },
  '1.0.86.0': {
    'us-east-1': 'arn:aws:lambda:us-east-1:580247275435:layer:LambdaInsightsExtension:11',
    'us-east-2': 'arn:aws:lambda:us-east-2:580247275435:layer:LambdaInsightsExtension:11',
    'us-west-1': 'arn:aws:lambda:us-west-1:580247275435:layer:LambdaInsightsExtension:11',
    'us-west-2': 'arn:aws:lambda:us-west-2:580247275435:layer:LambdaInsightsExtension:11',
    'ap-south-1': 'arn:aws:lambda:ap-south-1:580247275435:layer:LambdaInsightsExtension:11',
    'ap-northeast-2': 'arn:aws:lambda:ap-northeast-2:580247275435:layer:LambdaInsightsExtension:11',
    'ap-southeast-1': 'arn:aws:lambda:ap-southeast-1:580247275435:layer:LambdaInsightsExtension:11',
    'ap-southeast-2': 'arn:aws:lambda:ap-southeast-2:580247275435:layer:LambdaInsightsExtension:11',
    'ap-northeast-1': 'arn:aws:lambda:ap-northeast-1:580247275435:layer:LambdaInsightsExtension:11',
    'ca-central-1': 'arn:aws:lambda:ca-central-1:580247275435:layer:LambdaInsightsExtension:11',
    'eu-central-1': 'arn:aws:lambda:eu-central-1:580247275435:layer:LambdaInsightsExtension:11',
    'eu-west-1': 'arn:aws:lambda:eu-west-1:580247275435:layer:LambdaInsightsExtension:11',
    'eu-west-2': 'arn:aws:lambda:eu-west-2:580247275435:layer:LambdaInsightsExtension:11',
    'eu-west-3': 'arn:aws:lambda:eu-west-3:580247275435:layer:LambdaInsightsExtension:11',
    'eu-north-1': 'arn:aws:lambda:eu-north-1:580247275435:layer:LambdaInsightsExtension:11',
    'sa-east-1': 'arn:aws:lambda:sa-east-1:580247275435:layer:LambdaInsightsExtension:11',
  },
  '1.0.54.0': {
    'us-east-1': 'arn:aws:lambda:us-east-1:580247275435:layer:LambdaInsightsExtension:2',
    'us-east-2': 'arn:aws:lambda:us-east-2:580247275435:layer:LambdaInsightsExtension:2',
    'us-west-1': 'arn:aws:lambda:us-west-1:580247275435:layer:LambdaInsightsExtension:2',
    'us-west-2': 'arn:aws:lambda:us-west-2:580247275435:layer:LambdaInsightsExtension:2',
    'ap-south-1': 'arn:aws:lambda:ap-south-1:580247275435:layer:LambdaInsightsExtension:2',
    'ap-northeast-2': 'arn:aws:lambda:ap-northeast-2:580247275435:layer:LambdaInsightsExtension:2',
    'ap-southeast-1': 'arn:aws:lambda:ap-southeast-1:580247275435:layer:LambdaInsightsExtension:2',
    'ap-southeast-2': 'arn:aws:lambda:ap-southeast-2:580247275435:layer:LambdaInsightsExtension:2',
    'ap-northeast-1': 'arn:aws:lambda:ap-northeast-1:580247275435:layer:LambdaInsightsExtension:2',
    'ca-central-1': 'arn:aws:lambda:ca-central-1:580247275435:layer:LambdaInsightsExtension:2',
    'eu-central-1': 'arn:aws:lambda:eu-central-1:580247275435:layer:LambdaInsightsExtension:2',
    'eu-west-1': 'arn:aws:lambda:eu-west-1:580247275435:layer:LambdaInsightsExtension:2',
    'eu-west-2': 'arn:aws:lambda:eu-west-2:580247275435:layer:LambdaInsightsExtension:2',
    'eu-west-3': 'arn:aws:lambda:eu-west-3:580247275435:layer:LambdaInsightsExtension:2',
    'eu-north-1': 'arn:aws:lambda:eu-north-1:580247275435:layer:LambdaInsightsExtension:2',
    'sa-east-1': 'arn:aws:lambda:sa-east-1:580247275435:layer:LambdaInsightsExtension:2',
  },
};

// https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-rs-vpc
export const FIREHOSE_CIDR_BLOCKS: { [region: string]: string } = {
  'af-south-1': '13.244.121.224',
  'ap-east-1': '18.162.221.32',
  'ap-northeast-1': '13.113.196.224',
  'ap-northeast-2': '13.209.1.64',
  'ap-northeast-3': '13.208.177.192',
  'ap-south-1': '13.232.67.32',
  'ap-southeast-1': '13.228.64.192',
  'ap-southeast-2': '13.210.67.224',
  'ca-central-1': '35.183.92.128',
  'cn-north-1': '52.81.151.32',
  'cn-northwest-1': '161.189.23.64',
  'eu-central-1': '35.158.127.160',
  'eu-north-1': '13.53.63.224',
  'eu-south-1': '15.161.135.128',
  'eu-west-1': '52.19.239.192',
  'eu-west-2': '18.130.1.96',
  'eu-west-3': '35.180.1.96',
  'me-south-1': '15.185.91.0',
  'sa-east-1': '18.228.1.128',
  'us-east-1': '52.70.63.192',
  'us-east-2': '13.58.135.96',
  'us-gov-east-1': '18.253.138.96',
  'us-gov-west-1': '52.61.204.160',
  'us-west-1': '13.57.135.192',
  'us-west-2': '52.89.255.224',
};
