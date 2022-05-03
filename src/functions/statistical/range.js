// Require
const LimeFunction = require('../../structs/function');

// Range function class
class LimeFunctionRange extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'range', mode });

    // Right unary operation
    this.operations.r = [
      'er(arg{expr[@]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{expr[@]})', (step) => {
      step.rus(this.lime.direct(['max', step.right, '-', 'min', step.right]));
    });
  }
}

// Export
module.exports = LimeFunctionRange;
