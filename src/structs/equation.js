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

  // Record function
  record(step) {
    if (this.lime.config.promptShowSteps) {
      console.log(step.data);
    }
    this.solution.push(step);
  }
}

// Export
module.exports = LimeEquation;
