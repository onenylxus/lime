// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Convert to matrix function class
class LimeFunctionToMatrix extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'toMatrix', mode });

    // Right unary operation
    this.operations.r = [
      'er(arg{expr[1]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{expr[1]})', (step) => {
      switch (this.lime.direct(['type', step.right]).value) {
        case 'matrix':
          step.rus(step.right.places[0]);
          break;

        default:
          step.rus(this.lime.direct(['[', step.right.places[0], ']']));
      }
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionToMatrix;
