// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Omitted function class
class LimeFunctionOmitted extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'omitted', mode });

    // Binary operation
    this.operations.b = [
      'eb(expr,expr)',
    ];

    // Algorithms
    this.algorithms.set('b(expr,expr)', (step) => {
      step.fs(step.lime.refer('*'));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionOmitted;
