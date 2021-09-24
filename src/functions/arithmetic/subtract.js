// Require
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
      step.bs(this.lime.build('integer')(step.left.value - step.right.value));
    });

    this.algorithms.set('b(rat,rat)', (step) => {
      step.bs(this.lime.build('rational')(
        this.lime.direct([step.left.nPlace, '*', step.right.dPlace, '-', step.right.nPlace, '*', step.left.dPlace]),
        this.lime.direct([step.left.dPlace, '*', step.right.dPlace]),
      ));
    });

    this.algorithms.set('b(comp,comp)', (step) => {
      step.bs(this.lime.build('complex')(
        this.lime.direct([step.left.rPlace, '-', step.right.rPlace]),
        this.lime.direct([step.left.iPlace, '-', step.right.iPlace]),
      ));
    });

    this.algorithms.set('b(mat,mat)', (step) => {
      if (step.left.row !== step.right.row || step.left.column !== step.right.column) {
        throw new Error('error:invalidMatrixDimensions');
      }

      const places = [];
      for (let j = 0; j < step.left.row; j++) {
        places.push([]);
        for (let i = 0; i < step.left.column; i++) {
          places[j].push(this.lime.direct([step.left.places[j][i], '-', step.right.places[j][i]]));
        }
      }

      step.bs(this.lime.build('matrix')(places));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionSubtract;
