// Include
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Add function class
class LimeFunctionAdd extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'add', mode });

    // Binary operation
    this.operations.b = [
      'tz(_+)',
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
      step.bs(this.lime.build('integer')(step.left.value + step.right.value));
    });
    this.algorithms.set('b(rat,rat)', (step) => {
      step.bs(this.lime.build('rational')(
        this.lime.direct([step.left.nPlace, '*', step.right.dPlace, '+', step.right.nPlace, '*', step.left.dPlace]),
        this.lime.direct([step.left.dPlace, '*', step.right.dPlace]),
      ));
    });
    this.algorithms.set('b(comp,comp)', (step) => {
      step.bs(this.lime.build('complex')(
        this.lime.direct([step.left.rPlace, '+', step.right.rPlace]),
        this.lime.direct([step.left.iPlace, '+', step.right.iPlace]),
      ));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionAdd;
