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
      'eb(mat,arg{int[1]})',
      'eb(expr,expr)',
    ];

    // Algorithms
    this.algorithms.set('b(mat,arg{int[1]})', (step) => {
      step.bs(step.lime.direct(['index', '(', step.left, ',', step.right, ')']));
    });

    this.algorithms.set('b(expr,expr)', (step) => {
      step.fs(step.lime.refer('*'));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionOmitted;
