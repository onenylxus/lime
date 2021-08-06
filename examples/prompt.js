// Require
const chalk = require('chalk');
const Prompt = require('prompt-sync')({ sigint: true });
const banner = require('../utils/banner');
const Lime = process.argv[2] === '-q' ? require('../src/lime')({ developmentMode: true }) : require('../dist/bundle')();

/* ------------------------ division ------------------------ */

// Process running function
function run() {
  const line = Prompt(chalk.cyan('> '));
  console.log('');
  if (line !== 'exit') {
    let res = Lime.prompt(line);
    if (res.startsWith('[!]')) {
      console.log(chalk.red.bold(res));
    } else if (res.startsWith('[?]')) {
      console.log(chalk.yellow.bold(res));
    } else if (res.startsWith('[i]')) {
      console.log(chalk.blue.bold(res));
    } else {
      console.log(res);
    }
    console.log('');
    run();
  } else {
    console.log(chalk.cyan.bold('[x] This prompt will exit after this message.'));
  }
}

/* ------------------------ division ------------------------ */

// Execute process
if (process.argv[2] === '-q') {
  console.log(chalk.yellow.bold('[?] This prompt is run by explicit code source instead of built bundle. Please build and run the bundle before commit.'));
  console.log('');
}
console.log(chalk.green(banner()));
console.log('');
run();