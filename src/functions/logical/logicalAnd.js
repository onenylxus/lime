// Include
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Logical AND function class
class LimeFunctionLogicalAnd extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'logicalAnd', mode });

    // Binary operation
    this.operations.b = [
      'tr(_!)',
      'tr(_+)',
      'tr(_-)',

      'cl(var->exp)',
      'cr(var->exp)',

      'eb(bool,bool)',
    ];

    // Algorithms
    this.algorithms.set('b(bool,bool)', (step) => {
      step.bs(this.lime.build('boolean')(step.left.value && step.right.value));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionLogicalAnd;
