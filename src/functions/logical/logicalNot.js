// Require
const LimeFunction = require('../../structs/function');

// Logical NOT function class
class LimeFunctionLogicalNot extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'logicalNot', mode });

    // Right unary operation
    this.operations.r = [
      'tr(_!)',
      'tr(_+)',
      'tr(_-)',

      'cr(var->expr)',
      'cr(arg{expr[1]}->expr)',
      'cr({comp|int|rat}->bool)',

      'er(bool)',
    ];

    // Algorithms
    this.algorithms.set('r(bool)', (step) => {
      step.rus(this.lime.build('boolean')(!step.right.value));
    });
  }
}

// Export
module.exports = LimeFunctionLogicalNot;
