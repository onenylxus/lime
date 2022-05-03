// Require
const LimeFunction = require('../../structs/function');

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
      'cl(arg{expr[1]}->expr)',
      'cr(arg{expr[1]}->expr)',
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

// Export
module.exports = LimeFunctionBitwiseAnd;
