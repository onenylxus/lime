// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Trace function class
class LimeFunctionTrace extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'trace', mode });

    // Operations
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
      for (let i = 0; i < m.row; i++) {
        d = this.lime.direct([d, '+', m.places[i][i]]);
      }

      step.rus(d);
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionTrace;
