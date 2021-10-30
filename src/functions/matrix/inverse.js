// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Inverse function class
class LimeFunctionInverse extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'inverse', mode });

    // Operations
    this.operations.r = [
      'er(arg{mat[1]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{mat[1]})', (step) => {
      const d = this.lime.direct(['det', '(', step.right.places[0], ')']);
      if (d.value === 0) {
        throw new Error('error:zeroMatrixDeterminant');
      }
      step.rus(this.lime.direct(['adj', '(', step.right.places[0], ')', './', d]));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionInverse;