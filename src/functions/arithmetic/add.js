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
      'cb(int>rat,rat)',
      'cb(rat,int>rat)',
      'eb(int,int)',
      'eb(rat,rat)',
    ];

    // Algorithms
    this.algorithms.set('b(int,int)', (step) => {
      step.bs(this.lime.build('integer')(step.left.value + step.right.value));
    });
    this.algorithms.set('b(rat,rat)', (step) => {
      step.bs(this.lime.build('rational')(
        this.lime.build('integer')(step.left.value.n * step.right.value.d + step.right.value.n * step.left.value.d),
        this.lime.build('integer')(step.left.value.d * step.right.value.d),
      ));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionAdd;