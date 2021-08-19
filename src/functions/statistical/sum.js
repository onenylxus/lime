// Include
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Sum function class
class LimeFunctionSum extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'sum', mode });

    // Operations
    this.operations.r = [
      'er(arg{expr[@]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{expr[@]})', (step) => {
      if (step.right.length === 0) {
        throw new Error('error:invalidArgumentLength');
      }

      let t = step.right.places[0];
      for (let i = 1; i < step.right.length; i++) {
        t = this.lime.direct([t, '+', step.right.places[i]]);
      }

      step.rus(this.lime.direct([t]));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionSum;
