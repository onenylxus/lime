// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Mean function class
class LimeFunctionMean extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'mean', mode });

    // Operations
    this.operations.r = [
      'er(arg{expr[@]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{expr[@]})', (step) => {
      if (step.right.length === 0) {
        throw new Error('error:invalidArgumentLength');
      }

      step.rus(this.lime.direct(['sum', step.right, '/', step.right.length]));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionMean;
