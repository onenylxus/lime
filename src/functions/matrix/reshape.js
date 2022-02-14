// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Reshape function class
class LimeFunctionReshape extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'reshape', mode });

    // Right unary operation
    this.operations.r = [
      'er(arg{mat[1],int[2]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{mat[1],int[2]})', (step) => {
      const places = [...step.right.places[0].places.flat()];
      const row = step.right.places[1].value; const col = step.right.places[2].value;
      if (row * col !== places.length) {
        throw new Error('error:invalidMatrixDimensions');
      }
      const arr = Array.from({ length: row }, () => places.splice(0, col));
      step.rus(this.lime.build('matrix')(arr));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionReshape;
