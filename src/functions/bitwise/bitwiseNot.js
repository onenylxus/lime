// Include
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Bitwise NOT function class
class LimeFunctionBitwiseNot extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'bitwiseNot', mode });

    // Right unary operation
    this.operations.r = [
      'tr(_!)',
      'tr(_+)',
      'tr(_-)',

      'cr(var->exp)',

      'er(int)',
    ];

    // Algorithms
    this.algorithms.set('r(int)', (step) => {
      step.rus(this.lime.direct([~step.right.value]));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionBitwiseNot;
