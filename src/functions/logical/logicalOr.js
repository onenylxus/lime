// Include
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

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
      'cl(!bool->bool)',
      'cr(!bool->bool)',

      'eb(bool,bool)',
    ];

    // Algorithms
    this.algorithms.set('b(bool,bool)', (step) => {
      step.bs(this.lime.build('boolean')(step.left.value || step.right.value));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionLogicalOr;
