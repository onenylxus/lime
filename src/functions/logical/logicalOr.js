// Require
const LimeFunction = require('../../structs/function');

// Logical OR function class
class LimeFunctionLogicalOr extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'logicalOr', mode });

    // Binary operation
    this.operations.b = [
      'tr(_!)',
      'tr(_+)',
      'tr(_-)',

      'cl(var->expr)',
      'cr(var->expr)',
      'cl(arg{expr[1]}->expr)',
      'cr(arg{expr[1]}->expr)',
      'cl({comp|int|rat}->bool)',
      'cr({comp|int|rat}->bool)',

      'eb(bool,bool)',
    ];

    // Algorithms
    this.algorithms.set('b(bool,bool)', (step) => {
      step.bs(this.lime.build('boolean')(step.left.value || step.right.value));
    });
  }
}

// Export
module.exports = LimeFunctionLogicalOr;
