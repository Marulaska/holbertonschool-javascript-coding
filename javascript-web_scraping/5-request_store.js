#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
const fs = require('fs');

request(url, (err, res, body) => {
  if (err) {
    console.log(err);
    return;
  }
  fs.writeFile(process.argv[3], body, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    }
  });
});
