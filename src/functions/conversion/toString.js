// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Convert to string function class
class LimeFunctionToString extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'toString', mode });

    // Right unary operation
    this.operations.r = [
      'er(arg{expr[1]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{expr[1]})', (step) => {
      switch (this.lime.direct(['type', step.right]).value) {
        case 'string':
          step.rus(step.right.places[0]);
          break;

        default:
          step.rus(this.lime.build('string')(step.right.places[0].print()));
      }
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionToString;
