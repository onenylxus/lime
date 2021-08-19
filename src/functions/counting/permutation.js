// Include
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Permutation function class
class LimeFunctionPermutation extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'permutation', mode });

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

      step.rus(this.lime.direct([l, '!', '/', '(', l, '-', r, ')', '!']));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionPermutation;
