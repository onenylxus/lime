// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// One matrix function class
class LimeFunctionOneMatrix extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'oneMatrix', mode });

    // Right unary operation
    this.operations.r = [
      'er(arg{int[1]})',
      'er(arg{int[2]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{int[1]})', (step) => {
      const n = step.right.value[0]; const places = [];
      for (let j = 0; j < n; j++) {
        places.push([]);
        for (let i = 0; i < n; i++) {
          places[j].push(this.lime.direct([1]));
        }
      }
      step.rus(this.lime.build('matrix')(places));
    });

    this.algorithms.set('r(arg{int[2]})', (step) => {
      const [m, n] = step.right.value; const places = [];
      for (let j = 0; j < m; j++) {
        places.push([]);
        for (let i = 0; i < n; i++) {
          places[j].push(this.lime.direct([1]));
        }
      }
      step.rus(this.lime.build('matrix')(places));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionOneMatrix;
