// Require
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
      'er(arg{int[1]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{int[1]})', (step) => {
      const t = step.right.value[0];
      if (t < 1) {
        throw new Error('error:invalidArgumentLogic');
      }
      if (!this.lime.store.hasOwnProperty('fibonacci')) {
        this.lime.store.fibonacci = [1, 1];
      }

      const s = [...this.lime.store.fibonacci];
      while (s.length < t) {
        s.push(s[s.length - 2] + s[s.length - 1]);
      }

      this.lime.store.fibonacci = [...s];
      step.rus(this.lime.direct([s[t - 1]]));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionFibonacci;
