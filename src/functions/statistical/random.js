// Require
const LimeFunction = require('../../structs/function');

// Random function class
class LimeFunctionRandom extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'random', mode });

    // Right unary operation
    this.operations.r = [
      'er(arg{})',
      'er(arg{int[1]})',
      'er(arg{int[2]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{})', (step) => {
      const m = 10 ** 15;
      step.rus(this.lime.direct([Math.floor(Math.random() * m), '/', m]));
    });

    this.algorithms.set('r(arg{int[1]})', (step) => {
      step.rus(this.lime.direct(['rand', '(', 0, ',', step.right.places[0], ')']));
    });

    this.algorithms.set('r(arg{int[2]})', (step) => {
      const [l, r] = step.right.places;
      if (this.lime.direct([l.value, '>', r.value]).value) {
        throw new Error('error:invalidArgumentLogic');
      }

      step.rus(this.lime.direct([Math.floor(Math.random() * (r.value - l.value + 1) + l.value)]));
    });
  }
}

// Export
module.exports = LimeFunctionRandom;
