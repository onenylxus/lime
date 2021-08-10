// Include
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Factorial function class
class LimeFunctionFactorial extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'factorial', mode });

    // Left unary operation
    this.operations.l = [
      'tz(_!)',
      'tf(!=)',

      'cl(var->exp)',

      'el(int)',
    ];

    // Algorithms
    this.algorithms.set('l(int)', (step) => {
      if (step.left.value < 0) {
        throw new Error('error:negativeFactorial');
      }
      if (step.left.value > 0) {
        step.lus(this.lime.direct([step.left, '*', '(', step.left, '-', 1, ')', '!']));
      } else {
        step.lus(this.lime.direct([1]));
      }
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionFactorial;
