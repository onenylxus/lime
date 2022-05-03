// Require
const LimeFunction = require('../../structs/function');

// Greater equal function class
class LimeFunctionGreaterEqual extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'greaterEqual', mode });

    // Binary operation
    this.operations.b = [
      'tr(_!)',
      'tr(_+)',
      'tr(_-)',

      'cl(var->expr)',
      'cr(var->expr)',
      'cl(arg{expr[1]}->expr)',
      'cr(arg{expr[1]}->expr)',
      'cl(bool->int)',
      'cr(bool->int)',
      'cb(int->rat,rat)',
      'cb(rat,int->rat)',

      'eb(int,int)',
      'eb(rat,rat)',
    ];

    // Algorithms
    this.algorithms.set('b(int,int)', (step) => {
      step.bs(this.lime.build('boolean')(step.left.value >= step.right.value));
    });

    this.algorithms.set('b(rat,rat)', (step) => {
      step.bs(this.lime.direct([step.left.nPlace, '*', step.right.dPlace, '>=', step.right.nPlace, '*', step.left.dPlace]));
    });
  }
}

// Export
module.exports = LimeFunctionGreaterEqual;
