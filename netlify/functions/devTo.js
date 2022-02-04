// import axios from "axios";
const axios = require("axios");
const handler = async (event) => {
  // get data from database
  //create a dummy data for dev to blog posting.
  var devToPost = JSON.stringify({
    article: {
      title: "Netlify Schedule function",
      body_markdown: "Testing2 Scheduling",
      published: false,
    },
  });
  var config = {
    method: "post",
    url: "https://dev.to/api/articles",
    headers: {
      "Content-Type": "application/json",
      "api-key": "r7p6nt1py397dGDfkdCNznfr",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
    data: devToPost,
  };

  axios(config)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("ERROR", err);
    });
};

module.exports.handler = handler;
