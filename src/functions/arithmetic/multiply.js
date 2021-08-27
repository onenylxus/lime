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

      'cl(var->expr)',
      'cr(var->expr)',
      'cl(arg{expr[1]}->expr)',
      'cr(arg{expr[1]}->expr)',
      'cl(bool->int)',
      'cr(bool->int)',
      'cb(int->rat,rat)',
      'cb(rat,int->rat)',
      'cb({int|rat}->comp,comp)',
      'cb(comp,{int|rat}->comp)',

      'eb(int,int)',
      'eb(rat,rat)',
      'eb(comp,comp)',
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
    this.algorithms.set('b(comp,comp)', (step) => {
      step.bs(this.lime.build('complex')(
        this.lime.direct([step.left.rPlace, '*', step.right.rPlace, '-', step.left.iPlace, '*', step.right.iPlace]),
        this.lime.direct([step.left.rPlace, '*', step.right.iPlace, '+', step.left.iPlace, '*', step.right.rPlace]),
      ));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionMultiply;
