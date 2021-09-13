const fetch = require("node-fetch");

exports.handler = async function () {
  const GITHUB_API = "https://api.github.com/users/HumbleKind";
  const response = await fetch(GITHUB_API);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
