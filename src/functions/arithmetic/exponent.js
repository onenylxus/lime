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
      'tr(_+)',
      'tr(_-)',

      'cl(var->exp)',
      'cr(var->exp)',

      'eb(int,int)',
      'eb(rat,int)',
    ];

    // Algorithms
    this.algorithms.set('b(int,int)', (step) => {
      if (step.right.value >= 0) {
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
