// Require
const LimeFunction = require('../../structs/function');

// Factorial function class
class LimeFunctionFactorial extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'factorial', mode });

    // Left unary operation
    this.operations.l = [
      'tz(_!)',
      'tl(_!)',
      'tf(!=)',

      'cl(var->expr)',
      'cl(arg{expr[1]}->expr)',
      'cl(bool->int)',

      'el(int)',
    ];

    // Algorithms
    this.algorithms.set('l(int)', (step) => {
      if (step.left.value < 0) {
        throw new Error('warn:negativeFactorial');
      }
      if (step.left.value > 0) {
        step.lus(this.lime.direct([step.left, '*', '(', step.left, '-', 1, ')', '!']));
      } else {
        step.lus(this.lime.direct([1]));
      }
    });
  }
}

// Export
module.exports = LimeFunctionFactorial;
