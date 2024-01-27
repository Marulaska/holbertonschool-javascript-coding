#!/usr/bin/node

const fs = require('node:fs');

const args = process.argv.slice(2);

fs.readFile(args[0], 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
