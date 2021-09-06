// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Greatest common divisor function class
class LimeFunctionGreatestCommonDivisor extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'greatestCommonDivisor', mode });

    // Operations
    this.operations.r = [
      'er(arg{int[2]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{int[2]})', (step) => {
      let l = step.right.value[0]; let r = step.right.value[1];
      while (r !== 0) {
        const t = r;
        r = l % r;
        l = t;
      }
      step.rus(this.lime.direct([l]));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionGreatestCommonDivisor;