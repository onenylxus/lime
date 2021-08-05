// Equation class
class LimeEquation {
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

  // Get result
  get result() {
    return this.solution[this.steps - 1].data;
  }

  /* ------------------------ division ------------------------ */

  // Record function
  record(step) {
    this.solution.push(step);
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeEquation;
