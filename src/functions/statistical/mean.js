// Require
const LimeFunction = require('../../structs/function');

// Mean function class
class LimeFunctionMean extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'mean', mode });

    // Right unary operation
    this.operations.r = [
      'er(arg{expr[@]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{expr[@]})', (step) => {
      step.rus(this.lime.direct(['sum', step.right, '/', step.right.length]));
    });
  }
}

// Export
module.exports = LimeFunctionMean;
