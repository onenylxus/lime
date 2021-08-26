// Include
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Exponent function class
class LimeFunctionExponent extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'exponent', mode });

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

      'eb(int,int)',
      'eb(rat,int)',
    ];

    // Algorithms
    this.algorithms.set('b(int,int)', (step) => {
      if (step.right.value >= 0) {
        if (step.left.value === 0 && step.right.value === 0) {
          throw new Error('warn:zeroExponentOfZero');
        }
        step.bs(this.lime.build('integer')(step.left.value ** step.right.value));
      } else {
        step.bs(this.lime.build('rational')(
          this.lime.direct([1]),
          this.lime.direct([step.left, '^', '-', step.right]),
        ));
      }
    });
    this.algorithms.set('b(rat,int)', (step) => {
      if (step.right.value >= 0) {
        step.bs(this.lime.build('rational')(
          this.lime.direct([step.left.nPlace, '^', step.right]),
          this.lime.direct([step.left.dPlace, '^', step.right]),
        ));
      } else {
        step.bs(this.lime.build('rational')(
          this.lime.direct([step.left.dPlace, '^', '-', step.right]),
          this.lime.direct([step.left.nPlace, '^', '-', step.right]),
        ));
      }
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionExponent;
