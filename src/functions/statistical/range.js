// Include
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Range function class
class LimeFunctionRange extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'range', mode });

    // Operations
    this.operations.r = [
      'er(arg{expr[@]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{expr[@]})', (step) => {
      if (step.right.length === 0) {
        throw new Error('error:invalidArgumentLength');
      }

      step.rus(this.lime.direct(['max', step.right, '-', 'min', step.right]));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionRange;
