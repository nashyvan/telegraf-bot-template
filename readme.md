# telegraf-bot-template

1. Copy your node_modules folder to the nodejs folder and zip it
2. Zip all bot files (bot folder, index.js, package.json, package-lock.json)
3. Upload zip files in your S3 bucket
4. Create AWS Lambda function (arm is faster and cheaper)
5. Create layer for Lambda and specify nodejs.zip file from S3
6. Add your nodejs layer to lambda
7. Upload your zip bot file from S3
8. Comment local.connection and uncomment lambda.connection in index.js file
9. Set timeout (3 minutes) in Configuration - General configuration 
10. Specify variables in Configuration - Environment variables 
11. Click Deploy
12. Create REST API in AWS API Gateway:
    * Create POST method (Actions - Create Method) 
      * Use Lambda Proxy integration - ON
    * Deploy API (Actions - Deploy)
    * `https://api.telegram.org/bot<API_KEY>/setWebHook?url=<INVOKE_URL>/<ROUTE>`
