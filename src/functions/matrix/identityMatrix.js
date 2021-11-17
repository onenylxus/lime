// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Identity matrix function class
class LimeFunctionIdentityMatrix extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'identityMatrix', mode });

    // Operations
    this.operations.r = [
      'er(arg{int[1]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{int[1]})', (step) => {
      const n = step.right.value[0]; const places = [];
      for (let j = 0; j < n; j++) {
        places.push([]);
        for (let i = 0; i < n; i++) {
          places[j].push(this.lime.direct([i === j ? 1 : 0]));
        }
      }
      step.rus(this.lime.build('matrix')(places));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionIdentityMatrix;
