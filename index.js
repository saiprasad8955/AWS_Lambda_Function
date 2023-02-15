
// Here's an example describing code that is used to see how Lambda functions are invoked through an API Gateway and how the response is handled:

// "The code in the index.js file is designed to provide a simple demonstration of how Lambda functions can be invoked through an API Gateway, and how the response from the Lambda function is handled and displayed."

exports.handler = async (event) => {
    var response = {
        statusCode: 404,
        body: JSON.stringify({
            Error: "No Routes"
        }),
    };


    if (event.path == "/api/getproduct") {
        response = {
            statusCode: 200,
            body: JSON.stringify({
                ProductName: "Puma Lightning Shoes",
                Price: "1500"
            }),
        }
    }


    if (event.path == "/api/getuser") {
        response = {
            statusCode: 200,
            body: JSON.stringify({
                userName: "Sai Rathod",
                Email: "rsaiprasad4@gmail.com"
            }),
        }
    }

    return response;
}



// Code for storing the data to AWS opensearch
// I have created a index as fruit in AWS Opensearch through dashboard but not able to apply this code through lambda function 


// const AWS = require('aws-sdk');
// const OpenSearch = new AWS.OpenSearch();

// exports.handler = async (event) => {
//     const body = JSON.parse(event.body);

//     const indexName = 'fruit'; // Replace with your OpenSearch index name

//     const document = {
//         "name": body.name,
//         "color": body.fruitColor
//     };

//     const params = {
//         'ContentType': 'application/json',
//         'IndexName': indexName,
//         'Body': JSON.stringify(document)
//     };

//     try {
//         await OpenSearch.indexDocument(params).promise();
//         return {
//             'statusCode': 200,
//             'body': JSON.stringify({ 'message': 'Data indexed successfully' })
//         };
//     } catch (error) {
//         console.error('Error indexing data: ', error);
//         return {
//             'statusCode': 500,
//             'body': JSON.stringify({ 'message': 'Error indexing data' })
//         };
//     }
// };