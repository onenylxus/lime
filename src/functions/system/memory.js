// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Memory function class
class LimeFunctionMemory extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'memory', mode });

    // Operations
    this.operations.r = [
      'er(arg{int[1]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{int[1]})', (step) => {
      const m = this.lime.memory; const k = step.right.value[0] - 1;
      if (k < 0 || k >= m.length) {
        throw new Error('error:invalidMemoryIndex');
      }
      step.rus(m[k].result[0]);
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionMemory;