// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Transpose function class
class LimeFunctionTranspose extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'transpose', mode });

    // Right unary operation
    this.operations.r = [
      'er(arg{mat[1]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{mat[1]})', (step) => {
      const m = step.right.places[0]; const places = [];
      for (let j = 0; j < m.column; j++) {
        places.push([]);
        for (let i = 0; i < m.row; i++) {
          places[j].push(this.lime.direct([m.places[i][j]]));
        }
      }
      step.rus(this.lime.build('matrix')(places));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionTranspose;
