#!/usr/bin/node

const request = require('request');

const id = process.argv[2];

request(`https://swapi-api.hbtn.io/api/films/${id}`, (err, res, body) => {
  if (err) {
    console.error(err);
  } else {
    const title = JSON.parse(body).title;
    console.log(title);
  }
});
