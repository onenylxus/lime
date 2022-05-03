// Require
const LimeFunction = require('../../structs/function');

// Inverse function class
class LimeFunctionInverse extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'inverse', mode });

    // Right unary operation
    this.operations.r = [
      'er(arg{mat[1]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{mat[1]})', (step) => {
      const d = this.lime.direct(['det', '(', step.right.places[0], ')']);
      if (d.value === 0) {
        throw new Error('warn:zeroMatrixDeterminant');
      }
      step.rus(this.lime.direct(['adj', '(', step.right.places[0], ')', './', d]));
    });
  }
}

// Export
module.exports = LimeFunctionInverse;
