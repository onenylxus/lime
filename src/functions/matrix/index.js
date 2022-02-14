// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Index function class
class LimeFunctionIndex extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'index', mode });

    // Right unary operation
    this.operations.r = [
      'er(arg{mat[1],int[1]})',
      'er(arg{mat[1],int[2]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{mat[1],int[1]})', (step) => {
      if (
        step.right.value[1] <= 0
        || step.right.value[1] > step.right.places[0].size
      ) {
        throw new Error('error:invalidMatrixDimensions');
      }

      const r = Math.floor((step.right.value[1] - 1) / step.right.places[0].column);
      const c = (step.right.value[1] - 1) % step.right.places[0].column;
      step.rus(step.right.places[0].places[r][c]);
    });

    this.algorithms.set('r(arg{mat[1],int[2]})', (step) => {
      if (
        step.right.value[1] <= 0
        || step.right.value[1] > step.right.places[0].row
        || step.right.value[2] <= 0
        || step.right.value[2] > step.right.places[0].column
      ) {
        throw new Error('error:invalidMatrixDimensions');
      }

      step.rus(step.right.places[0].places[step.right.value[1] - 1][step.right.value[2] - 1]);
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionIndex;
