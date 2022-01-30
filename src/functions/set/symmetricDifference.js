// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Symmetric difference function class
class LimeFunctionSymmetricDifference extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'symmetricDifference', mode });

    // Operations
    this.operations.r = [
      'er(arg{set[2]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{set[2]})', (step) => {
      const l = this.lime.direct(['diff', '(', step.right.places[0], ',', step.right.places[1], ')']);
      const r = this.lime.direct(['diff', '(', step.right.places[1], ',', step.right.places[0], ')']);
      step.rus(this.lime.build('set')(...l.places, ...r.places));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionSymmetricDifference;
