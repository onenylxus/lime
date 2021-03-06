// Require
const LimeFunction = require('../../structs/function');

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

    this.algorithms.set('b(comp,comp)', (step) => {
      step.bs(this.lime.build('complex')(
        this.lime.direct(['re', '(', step.left, '*', 'conj', '(', step.right, ')', ')', '/', '(', step.right, '*', 'conj', '(', step.right, ')', ')']),
        this.lime.direct(['im', '(', step.left, '*', 'conj', '(', step.right, ')', ')', '/', '(', step.right, '*', 'conj', '(', step.right, ')', ')']),
      ));
    });
  }
}

// Export
module.exports = LimeFunctionDivide;
