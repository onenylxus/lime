// Require
const LimeFunction = require('../../structs/function');

// Imaginary function class
class LimeFunctionImaginary extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'imaginary', mode });

    // Right unary operation
    this.operations.r = [
      'cr(arg{{int|rat}[$]}->arg{comp[$]})',

      'er(arg{comp[1]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{comp[1]})', (step) => {
      step.rus(this.lime.direct([step.right.places[0].iPlace]));
    });
  }
}

// Export
module.exports = LimeFunctionImaginary;
