// Include
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Multiply function class
class LimeFunctionMultiply extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'multiply', mode });

    // Binary operation
    this.operations.b = [
      'tr(_!)',
      'tr(_+)',
      'tr(_-)',

      'cb(int->rat,rat)',
      'cb(rat,int->rat)',
      'cl(var->exp)',
      'cr(var->exp)',

      'eb(int,int)',
      'eb(rat,rat)',
    ];

    // Algorithms
    this.algorithms.set('b(int,int)', (step) => {
      step.bs(this.lime.build('integer')(step.left.value * step.right.value));
    });
    this.algorithms.set('b(rat,rat)', (step) => {
      step.bs(this.lime.build('rational')(
        this.lime.direct([step.left.nPlace, '*', step.right.nPlace]),
        this.lime.direct([step.left.dPlace, '*', step.right.dPlace]),
      ));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionMultiply;
