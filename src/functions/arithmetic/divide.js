// Include
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Divide function class
class LimeFunctionDivide extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'divide', mode });

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
      if (step.left.value % step.right.value === 0) {
        step.bs(this.lime.build('integer')(step.left.value / step.right.value));
      } else {
        step.bs(this.lime.build('rational')(step.left, step.right));
      }
    });
    this.algorithms.set('b(rat,rat)', (step) => {
      step.bs(this.lime.build('rational')(
        this.lime.direct([step.left.nPlace, '*', step.right.dPlace]),
        this.lime.direct([step.left.dPlace, '*', step.right.nPlace]),
      ));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionDivide;
