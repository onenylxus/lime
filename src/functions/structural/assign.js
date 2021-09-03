// Require
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

      'cr(var->expr)',
      'cr(arg{expr[1]}->expr)',

      'eb(var,expr)',
    ];

    // Algorithms
    this.algorithms.set('b(var,expr)', (step) => {
      this.lime.variables.set(step.left.key, step.right);
      step.bs(step.left);
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionAssign;
