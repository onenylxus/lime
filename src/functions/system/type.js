// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Type function class
class LimeFunctionType extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'type', mode });

    // Right unary operation
    this.operations.r = [
      'er(arg{expr[1]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{expr[1]})', (step) => {
      step.rus(this.lime.build('string')(step.right.places[0].name));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionType;
