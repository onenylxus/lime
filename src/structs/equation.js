// Require
const Compiler = require('../system/compiler');

/* ------------------------ division ------------------------ */

// Equation class
class Equation {
  // Constructor
  constructor(lime, input) {
    // Parent
    this.lime = lime;

    // Properties
    this.input = input;
    this.solution = [];
  }

  /* ------------------------ division ------------------------ */

  // Get steps
  get steps() {
    return this.solution.length;
  }

  // Get runtime
  get runtime() {
    return this.solution[this.steps - 1].timestamp - this.solution[0].timestamp;
  }

  // Get result
  get result() {
    return this.solution[this.steps - 1].data;
  }

  /* ------------------------ division ------------------------ */

  // Record function
  record(step) {
    if (this.lime.config.promptShowSteps) {
      console.log(step.data);
    }
    this.solution.push(step);
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = Compiler.generic(Equation, 'Equation');
