// Include
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Assign function class
class LimeFunctionAssign extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'assign', mode });

    // Binary operation
    this.operations.b = [
      'tf(==)',
      'tr(_+)',
      'tr(_-)',

      'cr(var->exp)',

      'eb(var,exp)',
    ];

    // Algorithms
    this.algorithms.set('b(var,exp)', (step) => {
      this.lime.variables.set(step.left.key, step.right);
      step.bs(step.left);
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionAssign;
