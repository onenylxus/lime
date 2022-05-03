// Require
const LimeFunction = require('../../structs/function');

// Maximum function class
class LimeFunctionMaximum extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'maximum', mode });

    // Right unary operation
    this.operations.r = [
      'er(arg{expr[@]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{expr[@]})', (step) => {
      let t = 0;
      for (let i = 1; i < step.right.length; i++) {
        t = this.lime.direct([step.right.places[i], '>', step.right.places[t]]).value ? i : t;
      }

      step.rus(this.lime.direct([step.right.places[t]]));
    });
  }
}

// Export
module.exports = LimeFunctionMaximum;
