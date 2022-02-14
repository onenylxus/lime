// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Minor function class
class LimeFunctionMinor extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'minor', mode });

    // Right unary operation
    this.operations.r = [
      'er(arg{mat[1],int[2]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{mat[1],int[2]})', (step) => {
      if (
        step.right.value[1] <= 0
        || step.right.value[1] > step.right.places[0].row
        || step.right.value[2] <= 0
        || step.right.value[2] > step.right.places[0].column
      ) {
        throw new Error('error:invalidMatrixDimensions');
      }

      const places = [];
      for (let j = 0; j < step.right.places[0].row; j++) {
        if (j !== step.right.value[1] - 1) {
          places.push([]);
          for (let i = 0; i < step.right.places[0].column; i++) {
            if (i !== step.right.value[2] - 1) {
              places[places.length - 1].push(step.right.places[0].places[j][i]);
            }
          }
        }
      }
      step.rus(this.lime.build('matrix')(places));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionMinor;
