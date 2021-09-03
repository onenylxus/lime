// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Zero matrix function class
class LimeFunctionZeroMatrix extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'zeroMatrix', mode });

    // Operations
    this.operations.r = [
      'er(arg{int[1]})',
      'er(arg{int[2]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{int[1]})', (step) => {
      const places = [];
      for (let j = 0; j < step.right.value[0]; j++) {
        places.push([]);
        for (let i = 0; i < step.right.value[0]; i++) {
          places[j].push(this.lime.direct([0]));
        }
      }
      step.rus(this.lime.build('matrix')(places));
    });
    this.algorithms.set('r(arg{int[2]})', (step) => {
      const places = [];
      for (let j = 0; j < step.right.value[0]; j++) {
        places.push([]);
        for (let i = 0; i < step.right.value[1]; i++) {
          places[j].push(this.lime.direct([0]));
        }
      }
      step.rus(this.lime.build('matrix')(places));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionZeroMatrix;
