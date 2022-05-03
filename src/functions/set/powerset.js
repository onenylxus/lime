// Require
const LimeFunction = require('../../structs/function');

// Powerset function class
class LimeFunctionPowerset extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'powerset', mode });

    // Right unary operation
    this.operations.r = [
      'er(arg{set[1]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{set[1]})', (step) => {
      const b = step.right.places[0]; const f = b.places.map(() => 0); const places = [];
      while (f.some((v) => v < 1)) {
        places.push(this.lime.build('set')(...b.places.filter((v, i) => f[i])));
        f[0]++;
        for (let i = 0; i < f.length - 1; i++) {
          if (f[i] > 1) {
            f[i] -= 2;
            f[i + 1]++;
          }
        }
      }
      step.rus(this.lime.build('set')(...places, b));
    });
  }
}

// Export
module.exports = LimeFunctionPowerset;
