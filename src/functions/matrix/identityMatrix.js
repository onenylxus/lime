// Require
const LimeFunction = require('../../structs/function');

// Identity matrix function class
class LimeFunctionIdentityMatrix extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'identityMatrix', mode });

    // Right unary operation
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

// Export
module.exports = LimeFunctionIdentityMatrix;
