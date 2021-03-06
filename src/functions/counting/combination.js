// Require
const LimeFunction = require('../../structs/function');

// Combination function class
class LimeFunctionCombination extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'combination', mode });

    // Right unary operation
    this.operations.r = [
      'er(arg{int[2]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{int[2]})', (step) => {
      const [l, r] = step.right.places;
      if (l.value < 0 || r.value < 0) {
        throw new Error('warn:negativePermutation');
      }
      step.rus(this.lime.direct(['npr', '(', l, ',', r, ')', '/', 'npr', '(', r, ',', r, ')']));
    });
  }
}

// Export
module.exports = LimeFunctionCombination;
