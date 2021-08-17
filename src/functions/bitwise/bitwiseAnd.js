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

      'cl(var->expr)',
      'cr(var->expr)',
      'cl(arg{expr}->expr)',
      'cr(arg{expr}->expr)',
      'cl(bool->int)',
      'cr(bool->int)',

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
