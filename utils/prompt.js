// Require
const chalk = require('chalk');
const Prompt = require('prompt-sync')({ sigint: true });
const Types = require('../utils/types');
const Lime = process.argv[2] === '-q' ? require('../src/lime')({ developmentMode: true }) : require('../dist/bundle')();

// Process running function
function run() {
  while (true) {
    const line = Prompt(chalk.cyan('> '));
    console.log('');

    if (line === 'exit') {
      console.log(chalk.cyan.bold('[x] This prompt will exit after this message.'));
      return;
    }

    let res = Lime.prompt(line);
    if (Types.isString(res) && res.startsWith('[!]')) {
      console.log(chalk.red.bold(res));
    } else if (Types.isString(res) && res.startsWith('[?]')) {
      console.log(chalk.yellow.bold(res));
    } else if (Types.isString(res) && res.startsWith('[i]')) {
      console.log(chalk.blue.bold(res));
    } else {
      console.log(res);
    }
    console.log('');
  }
}

// Execute process
if (process.argv[2] === '-q') {
  console.log(chalk.yellow.bold('[?] This prompt is run by explicit code source instead of built bundle. Please build and run the bundle before commit.'));
  console.log('');
}
console.log(chalk.green(Lime.prompt('about')));
console.log('');
run();
