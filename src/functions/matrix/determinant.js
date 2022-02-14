// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Determinant function class
class LimeFunctionDeterminant extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'determinant', mode });

    // Right unary operation
    this.operations.r = [
      'er(arg{mat[1]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{mat[1]})', (step) => {
      const m = step.right.places[0];
      if (m.row !== m.column) {
        throw new Error('error:invalidMatrixDimensions');
      }

      let d = this.lime.direct([0]);
      if (m.row > 1) {
        for (let i = 0; i < m.row; i++) {
          d = this.lime.direct([d, i % 2 ? '-' : '+', m.places[0][i], '*', 'det', '(', 'minor', '(', m, ',', 1, ',', i + 1, ')', ')']);
        }
      } else {
        d = this.lime.direct([d, '+', m.places[0][0]]);
      }

      step.rus(d);
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionDeterminant;
