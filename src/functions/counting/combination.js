// Include
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Combination function class
class LimeFunctionCombination extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'combination', mode });

    // Operations
    this.operations.r = [
      'er(arg{int[2]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{int[2]})', (step) => {
      const [l, r] = step.right.places;
      if (l.value < r.value) {
        throw new Error('error:invalidArgumentLogic');
      }

      step.rus(this.lime.direct(['npr', '(', l, ',', r, ')', '/', r, '!']));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionCombination;
