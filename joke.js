const fetch = require("node-fetch");

async function getJoke() {
  const response = await fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious&type=single");
  const data = await response.json();
  return data.joke;
}

module.exports = getJoke;