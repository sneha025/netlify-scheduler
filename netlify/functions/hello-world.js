// const { schedule } = require("@netlify/functions");
const handler = async (event, context) => {
  console.log("Received event:", event);
  return {
    statusCode: 200,
    body: "welcome!!",
  };
};

// module.exports.handler = schedule("* * * * *", handler);
module.exports.handler = handler;
