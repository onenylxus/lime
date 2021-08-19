// Include
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Prime function class
class LimeFunctionPrime extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'prime', mode });

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

      const primes = [2]; let i = 3;
      while (primes.length < t) {
        if (primes.every((p) => i % p !== 0)) {
          primes.push(i);
        }
        i++;
      }
      step.rus(this.lime.direct([primes[primes.length - 1]]));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionPrime;
