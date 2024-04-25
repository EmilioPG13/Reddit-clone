const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const { subreddit } = event.queryStringParameters;
  const response = await fetch(`https://www.reddit.com/r/${subreddit}/about.json`);
  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};