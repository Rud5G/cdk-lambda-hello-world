import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { HelloWorld } from "./hello-world";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class HelloWorldStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'HelloWorldQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    new HelloWorld(this, 'hello-world');
  }
}


