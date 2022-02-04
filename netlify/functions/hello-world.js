const { schedule } = require("@netlify/functions");
const handler = async () => {
  return {
    statusCode: 200,
    body: "hello",
  };
};

// module.exports.handler = schedule("@hourly", handler);
module.exports.handler = handler;
