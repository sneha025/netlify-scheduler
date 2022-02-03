const { schedule } = require("@netlify/functions");
const handler = async () => {
  return {
    statusCode: 200,
    body: "ok",
  };
};

module.exports.handler = schedule("@hourly", handler);
