// Include
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Fibonacci function class
class LimeFunctionFibonacci extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'fibonacci', mode });

    // Operations
    this.operations.r = [
      'er(arg{int})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{int})', (step) => {
      const t = step.right.value[0];
      if (t < 1) {
        throw new Error('error:invalidArgumentLogic');
      }

      step.rus(this.lime.direct(t > 2 ? ['fibonacci', '(', t, '-', 1, ')', '+', 'fibonacci', '(', t, '-', 2, ')'] : [1]));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionFibonacci;
