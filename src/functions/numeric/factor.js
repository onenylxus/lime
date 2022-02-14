// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Factor function class
class LimeFunctionFactor extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'factor', mode });

    // Right unary operation
    this.operations.r = [
      'er(arg{int[1]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{int[1]})', (step) => {
      const t = step.right.value[0];
      if (t < 1) {
        throw new Error('warn:invalidNumberFactor');
      }

      const f = [1];
      for (let i = 2; i <= t; i++) {
        if (t % i === 0) {
          f.push(i);
        }
      }
      step.rus(this.lime.build('set')(...f.map((v) => this.lime.direct([v]))));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionFactor;
