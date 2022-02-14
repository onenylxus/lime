// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Subset function class
class LimeFunctionSubset extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'subset', mode });

    // Right unary operation
    this.operations.r = [
      'er(arg{set[2]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{set[2]})', (step) => {
      let bool = true;
      step.right.places[0].places.forEach((v) => {
        bool = bool && step.right.places[1].places.some((u) => this.lime.direct([v, '==', u]).value);
      });
      step.rus(this.lime.build('boolean')(bool));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionSubset;
