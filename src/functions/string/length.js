// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Length function class
class LimeFunctionLength extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'length', mode });

    // Right unary operation
    this.operations.r = [
      'er(arg{str[1]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{str[1]})', (step) => {
      step.rus(this.lime.direct([step.right.value[0].length]));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionLength;
