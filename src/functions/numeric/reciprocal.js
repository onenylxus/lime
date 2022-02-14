// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Reciprocal function class
class LimeFunctionReciprocal extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'reciprocal', mode });

    // Right unary operation
    this.operations.r = [
      'er(arg{expr[1]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{expr[1]})', (step) => {
      step.rus(this.lime.direct([1, '/', step.right.places[0]]));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionReciprocal;
