// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Real function class
class LimeFunctionReal extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'real', mode });

    // Operations
    this.operations.r = [
      'cr(arg{{int|rat}[$]}->arg{comp[$]})',

      'er(arg{comp[1]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{comp[1]})', (step) => {
      step.rus(this.lime.direct([step.right.places[0].rPlace]));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionReal;