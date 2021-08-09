// Include
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Equal function class
class LimeFunctionEqual extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'equal', mode });

    // Binary operation
    this.operations.b = [
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
      step.bs(this.lime.build('boolean')(step.left.value === step.right.value));
    });
    this.algorithms.set('b(rat,rat)', (step) => {
      step.bs(this.lime.direct([step.left.nPlace, '*', step.right.dPlace, '==', step.right.nPlace, '*', step.left.dPlace]));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionEqual;
