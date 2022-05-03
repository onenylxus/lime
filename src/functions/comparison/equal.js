// Require
const LimeFunction = require('../../structs/function');

// Equal function class
class LimeFunctionEqual extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'equal', mode });

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

      'eb(comp,comp)',
      'eb(int,int)',
      'eb(mat,mat)',
      'eb(rat,rat)',
      'eb(set,set)',
      'eb(expr,expr)',
    ];

    // Algorithms
    this.algorithms.set('b(comp,comp)', (step) => {
      step.bs(this.lime.direct([step.left.rPlace, '==', step.right.rPlace, '&&', step.left.iPlace, '==', step.right.iPlace]));
    });

    this.algorithms.set('b(int,int)', (step) => {
      step.bs(this.lime.build('boolean')(step.left.value === step.right.value));
    });

    this.algorithms.set('b(mat,mat)', (step) => {
      let bool = step.left.row === step.right.row && step.left.column === step.right.column;
      let br = !step.left.isEmpty;
      while (bool && br) {
        for (let j = 0; j < step.left.row; j++) {
          for (let i = 0; i < step.left.column; i++) {
            bool = bool && this.lime.direct([step.left.places[j][i], '==', step.right.places[j][i]]).value;
            br = j !== step.left.row - 1 || i !== step.left.column - 1;
          }
        }
      }
      step.bs(this.lime.build('boolean')(bool));
    });

    this.algorithms.set('b(rat,rat)', (step) => {
      step.bs(this.lime.direct([step.left.nPlace, '*', step.right.dPlace, '==', step.right.nPlace, '*', step.left.dPlace]));
    });

    this.algorithms.set('b(set,set)', (step) => {
      step.bs(this.lime.direct(['subset', '(', step.left, ',', step.right, ')', '&&', 'subset', '(', step.right, ',', step.left, ')']));
    });

    this.algorithms.set('b(expr,expr)', (step) => {
      step.bs(this.lime.direct(['false']));
    });
  }
}

// Export
module.exports = LimeFunctionEqual;
