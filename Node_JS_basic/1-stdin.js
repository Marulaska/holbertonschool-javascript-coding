console.log('Welcome to Holberton School, what is your name?');

const readline = require('readline');

const line = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

line.on('line', (data) => {
  console.log(`Your name is: ${data}`);
});

line.on('close', () => {
  console.log('This important software is now closing');
});
