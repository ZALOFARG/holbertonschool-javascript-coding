#!/usr/bin/node

const fs = require('fs');

const data = process.argv[3];
const file = process.argv[2];

fs.writeFile(file, data, 'utf-8', (err) => {
  if (err) {
    console.error(err);
  }
});
