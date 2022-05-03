// Require
const LimeFunction = require('../../structs/function');

// Scalar divide function class
class LimeFunctionScalarDivide extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'scalarDivide', mode });

    // Binary operation
    this.operations.b = [
      'cl(var->expr)',
      'cr(var->expr)',
      'cl(arg{expr[1]}->expr)',
      'cr(arg{expr[1]}->expr)',
      'cl(bool->int)',
      'cr(bool->int)',

      'eb(mat,mat)',
      'eb(mat,{comp|int|rat})',
      'eb({comp|int|rat},mat)',
    ];

    // Algorithms
    this.algorithms.set('b(mat,mat)', (step) => {
      if (step.left.row !== step.right.row || step.left.column !== step.right.column) {
        throw new Error('error:invalidMatrixDimensions');
      }

      const places = [];
      for (let j = 0; j < step.left.row; j++) {
        places.push([]);
        for (let i = 0; i < step.left.column; i++) {
          places[j].push(this.lime.direct([step.left.places[j][i], '/', step.right.places[j][i]]));
        }
      }

      step.bs(this.lime.build('matrix')(places));
    });

    this.algorithms.set('b(mat,{comp|int|rat})', (step) => {
      const places = [];
      for (let j = 0; j < step.left.row; j++) {
        places.push([]);
        for (let i = 0; i < step.left.column; i++) {
          places[j].push(this.lime.direct([step.left.places[j][i], '/', step.right]));
        }
      }

      step.bs(this.lime.build('matrix')(places));
    });

    this.algorithms.set('b({comp|int|rat},mat)', (step) => {
      const places = [];
      for (let j = 0; j < step.right.row; j++) {
        places.push([]);
        for (let i = 0; i < step.right.column; i++) {
          places[j].push(this.lime.direct([step.left, '/', step.right.places[j][i]]));
        }
      }

      step.bs(this.lime.build('matrix')(places));
    });
  }
}

// Export
module.exports = LimeFunctionScalarDivide;
