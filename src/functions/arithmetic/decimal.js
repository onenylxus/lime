// Require
const LimeFunction = require('../../structs/function');

// Decimal function class
class LimeFunctionDecimal extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'decimal', mode });

    // Binary operation
    this.operations.b = [
      'eb(int,int)',
    ];

    // Algorithms
    this.algorithms.set('b(int,int)', (step) => {
      if (step.right.value > 0) {
        const deg = this.lime.direct([10, '^', step.right.string.length]);
        step.bs(this.lime.direct(['(', step.left, '*', deg, '+', step.right, ')', '/', deg]));
      } else {
        step.bs(step.left);
      }
    });
  }
}

// Export
module.exports = LimeFunctionDecimal;
