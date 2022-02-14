// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Difference function class
class LimeFunctionDifference extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'difference', mode });

    // Right unary operation
    this.operations.r = [
      'er(arg{set[2]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{set[2]})', (step) => {
      const l = step.right.places[0]; const r = step.right.places[1];
      const places = [...l.places].filter((u) => r.places.every((v) => this.lime.direct([u, '!=', v]).value));
      step.rus(this.lime.build('set')(...places));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionDifference;
