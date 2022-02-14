// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Concatenate function class
class LimeFunctionConcatenate extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'concatenate', mode });

    // Right unary operation
    this.operations.r = [
      'er(arg{str[@]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{str[@]})', (step) => {
      step.rus(this.lime.build('string')(step.right.value[0].concat(...step.right.value.slice(1))));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionConcatenate;
