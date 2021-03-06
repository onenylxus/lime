// Require
const LimeFunction = require('../../structs/function');

// Assign function class
class LimeFunctionAssign extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'assign', mode });

    // Binary operation
    this.operations.b = [
      'tf(==)',

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

// Export
module.exports = LimeFunctionAssign;
