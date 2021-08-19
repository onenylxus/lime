// Include
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Round function class
class LimeFunctionRound extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'round', mode });

    // Operations
    this.operations.r = [
      'er(arg{int})',
      'er(arg{rat})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{int})', (step) => {
      step.rus(this.lime.direct([step.right.value[0]]));
    });
    this.algorithms.set('r(arg{rat})', (step) => {
      step.rus(this.lime.direct([Math.round(step.right.value[0].n / step.right.value[0].d)]));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionRound;
