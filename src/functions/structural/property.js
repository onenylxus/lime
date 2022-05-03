// Require
const LimeFunction = require('../../structs/function');

// Property function class
class LimeFunctionProperty extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'property', mode });

    // Binary operation
    this.operations.b = [
      'tf(_.)',
      'tf(.+)',
      'tf(./)',
      'tf(.^)',
      'tf(.%)',
      'tf(.*)',
      'tf(.-)',

      'eb(expr,str)',
    ];

    // Algorithms
    this.algorithms.set('b(expr,str)', (step) => {
      step.bs(step.left[step.right.value]);
    });
  }
}

// Export
module.exports = LimeFunctionProperty;
