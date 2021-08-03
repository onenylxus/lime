// Lime class
class Lime {
  // Constructor
  constructor(conf) {
    // Properties
    this.config = { ...require('./config.json'), ...conf };
    this.module = require('./system/module');
    this.constants = {};
    this.variables = { ans: undefined };
    this.memory = [];
  }

  /* ------------------------ division ------------------------ */

  // Prompt function
  prompt(input) {
    this.variables.ans = input;
    return input;
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = (conf) => new Lime(conf);
