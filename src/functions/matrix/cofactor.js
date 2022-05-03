// Require
const LimeFunction = require('../../structs/function');

// Cofactor function class
class LimeFunctionCofactor extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'cofactor', mode });

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
          places[j].push(this.lime.direct(['det', '(', 'minor', '(', m, ',', j + 1, ',', i + 1, ')', ')', '*', (i + j) % 2 ? -1 : 1]));
        }
      }
      step.rus(this.lime.build('matrix')(places));
    });
  }
}

// Export
module.exports = LimeFunctionCofactor;
