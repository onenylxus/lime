// Require
const LimeFunction = require('../../structs/function');

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
      'eb(mat,mat)',
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

    this.algorithms.set('b(mat,mat)', (step) => {
      if (step.left.column !== step.right.row) {
        throw new Error('error:invalidMatrixDimensions');
      }

      const places = [];
      for (let j = 0; j < step.left.row; j++) {
        places.push([]);
        for (let i = 0; i < step.right.column; i++) {
          let c = this.lime.direct([0]);
          for (let k = 0; k < step.right.row; k++) {
            c = this.lime.direct([c, '+', step.left.places[j][k], '*', step.right.places[k][i]]);
          }
          places[j].push(c);
        }
      }

      step.bs(this.lime.build('matrix')(places));
    });
  }
}

// Export
module.exports = LimeFunctionMultiply;
