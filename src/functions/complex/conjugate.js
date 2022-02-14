// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Conjugate function class
class LimeFunctionConjugate extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'conjugate', mode });

    // Right unary operation
    this.operations.r = [
      'cr(arg{{int|rat}[$]}->arg{comp[$]})',

      'er(arg{comp[1]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{comp[1]})', (step) => {
      step.rus(this.lime.build('complex')(
        step.right.places[0].rPlace,
        this.lime.direct(['-', step.right.places[0].iPlace]),
      ));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionConjugate;
