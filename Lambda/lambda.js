const AWS = require('aws-sdk');

const handler = async (event) => {
  // Log the incoming event for debugging purposes
  console.log('Received event:', JSON.stringify(event, null, 2));

  // Process the incoming event
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from AWS Lambda!',
      input: event,
    }),
  };

  console.log("response", response)
  return response;
};

handler({msg: "Hey there!!"})