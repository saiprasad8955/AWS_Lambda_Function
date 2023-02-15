# Invoking AWS Lambda Function Through AWS API Gateway -> AWS Opensearch

# Using AWS Lambda with API Gateway
- This project is an example of how to use an AWS Lambda function with an API Gateway to process HTTP requests and add data to an AWS OpenSearch index.

# Invoking AWS Lambda Function Through AWS API Gateway
- This project is an example of how to invoke an AWS Lambda function through an API Gateway in order to perform an action in your AWS account.

# Getting started
- To get started with this project, you'll need to do the following:
- Clone this repository to your local machine.
- Set up an AWS Lambda function in your AWS account that performs the action you want to invoke.
- Set up an API Gateway API to expose a RESTful endpoint that triggers the Lambda function.
- Deploy the API Gateway API and the Lambda function to your AWS account.

# Log in to the AWS Management Console and navigate to the Lambda service.
- Click "Create function" and choose "Author from scratch".
- Choose a name for your function and select the appropriate runtime (e.g. Node.js).
- In the function code editor, paste in the code for your Lambda function.
- Set up the necessary IAM permissions to allow your Lambda function to interact with any other AWS services required for your action.

# Setting up the API Gateway API, Which I have already done. 

### To set up the API Gateway API, follow these steps:

- Log in to the AWS Management Console and navigate to the API Gateway service.
- Click "Create API" and choose "REST API".
- Choose the "HTTP API" type and click "Create".
- Under "Routes", create a new route for your API with the appropriate HTTP method and path.
- Configure the route to integrate with your Lambda function.

# Deploying the API Gateway API and Lambda function
### To deploy the API Gateway API and Lambda function, follow these steps:

- In the API Gateway console, click "Deploy API" and choose a deployment stage (e.g. "prod").
- In the Lambda console, click "Deploy" to deploy your function.
- Invoking the Lambda function through the API
- Once you've set up your Lambda function and API Gateway API, you can invoke the Lambda function by making an HTTP request to the API Gateway endpoint you configured.
- Depending on the requirements of your action, you may need to pass in additional data as query parameters or in the request body. If the Lambda function is invoked successfully, it will perform the action you defined in your code.


## Please find below the API endpoints that are currently active, allowing you to invoke Lambda functions to perform various actions in our AWS account through the API Gateway.

### Get Method https://c77ofje097.execute-api.ap-northeast-1.amazonaws.com/dev/api/getuser
### Get Method https://c77ofje097.execute-api.ap-northeast-1.amazonaws.com/dev/api/getproduct
### Post Method https://c77ofje097.execute-api.ap-northeast-1.amazonaws.com/dev/api/postdata ( Not Working Properly )


#### Using the post method, I have created the API gateway, but I am unable to save the data. But I saved the data through AWS opensearch Dashboard through Dev tools and its indexed successfully but not able to save through postman as i dont have an prior knowledge in AWS other services though. 




### I am providing the code that I have written for adding data through code, but it does not work. 

#### OpenSearch Dashboards URL
- https://search-node-api-search-2ugdo4oh6qikg4lstr3j4gxpra.ap-northeast-1.es.amazonaws.com/_dashboards
#### Opensearch Domain endpoint
- https://search-node-api-search-2ugdo4oh6qikg4lstr3j4gxpra.ap-northeast-1.es.amazonaws.com


# Conclusion
- Invoking AWS Lambda functions through API Gateway can be a powerful way to trigger actions in your AWS account. With this project as a starting point, you should be able to set up your own API Gateway API and Lambda function to perform custom actions in your account.

- Using AWS Lambda with API Gateway can be a powerful way to process HTTP requests and add data to an OpenSearch index. With this project as a starting point, you should be able to set up your own API Gateway API and Lambda function to add data to your OpenSearch index in no time.
