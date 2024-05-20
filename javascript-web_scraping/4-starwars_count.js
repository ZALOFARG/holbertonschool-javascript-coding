#!/usr/bin/node

const request = require('request');

const URL = process.argv[2];

const characterID = 18;

request(URL, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const results = JSON.parse(body).results;
    let counter = 0;
    results.forEach((result) => {
      result.characters.forEach((charURL) => {
        if (charURL.includes(`${characterID}`)) {
          counter++;
        }
      });
    });
    console.log(counter);
  }
});
