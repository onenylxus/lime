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
      'tr(_+)',
      'tr(_-)',

      'cb(int->rat,rat)',
      'cb(rat,int->rat)',

      'eb(int,int)',
      'eb(rat,rat)',
    ];

    // Algorithms
    this.algorithms.set('b(int,int)', (step) => {
      step.bs(this.lime.build('integer')(step.left.value * step.right.value));
    });
    this.algorithms.set('b(rat,rat)', (step) => {
      step.bs(this.lime.build('rational')(
        this.lime.build('integer')(step.left.value.n * step.right.value.n),
        this.lime.build('integer')(step.left.value.d * step.right.value.d),
      ));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionMultiply;
