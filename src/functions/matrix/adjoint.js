// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Adjoint function class
class LimeFunctionAdjoint extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'adjoint', mode });

    // Right unary operation
    this.operations.r = [
      'er(arg{mat[1]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{mat[1]})', (step) => {
      step.rus(this.lime.direct(['transpose', '(', 'cof', '(', step.right.places[0], ')', ')']));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionAdjoint;
