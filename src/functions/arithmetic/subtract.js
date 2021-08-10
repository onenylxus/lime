// Include
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Subtract function class
class LimeFunctionSubtract extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'subtract', mode });

    // Binary operation
    this.operations.b = [
      'tz(_-)',
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
      step.bs(this.lime.build('integer')(step.left.value - step.right.value));
    });
    this.algorithms.set('b(rat,rat)', (step) => {
      step.bs(this.lime.build('rational')(
        this.lime.direct([step.left.nPlace, '*', step.right.dPlace, '-', step.right.nPlace, '*', step.left.dPlace]),
        this.lime.direct([step.left.dPlace, '*', step.right.dPlace]),
      ));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionSubtract;
