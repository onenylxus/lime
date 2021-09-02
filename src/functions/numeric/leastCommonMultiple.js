// Include
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Least common multiple function class
class LimeFunctionLeastCommonMultiple extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'leastCommonMultiple', mode });

    // Operations
    this.operations.r = [
      'er(arg{int[2]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{int[2]})', (step) => {
      const l = step.right.value[0]; const r = step.right.value[1];
      step.rus(this.lime.direct([l, '*', r, '/', 'gcd', '(', l, ',', r, ')']));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionLeastCommonMultiple;
