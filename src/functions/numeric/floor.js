// Include
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Floor function class
class LimeFunctionFloor extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'floor', mode });

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
      step.rus(this.lime.direct([Math.floor(step.right.value[0].n / step.right.value[0].d)]));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionFloor;
