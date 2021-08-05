// Include
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Add function class
class LimeFunctionAdd extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'add', mode });

    // Binary operation
    this.operations.b = [
      'eb(int,int)',
    ];

    // Algorithms
    this.algorithms.set('b(int,int)', (step) => {
      step.bs(this.lime.build('integer')(step.left.value + step.right.value));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionAdd;
