// Include
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Bitwise AND function class
class LimeFunctionBitwiseAnd extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'bitwiseAnd', mode });

    // Binary operation
    this.operations.b = [
      'tf(&&)',
      'tr(_!)',
      'tr(_+)',
      'tr(_-)',

      'cl(var->exp)',
      'cr(var->exp)',

      'eb(int,int)',
    ];

    // Algorithms
    this.algorithms.set('b(int,int)', (step) => {
      step.bs(this.lime.direct([step.left.value & step.right.value]));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionBitwiseAnd;
