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
      const places = [];
      for (let j = 0; j < step.right.value[0]; j++) {
        places.push([]);
        for (let i = 0; i < step.right.value[0]; i++) {
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
