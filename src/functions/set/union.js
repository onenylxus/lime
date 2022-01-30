// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Union function class
class LimeFunctionUnion extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'union', mode });

    // Operations
    this.operations.r = [
      'er(arg{set[2]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{set[2]})', (step) => {
      const s = this.lime.direct(['symdiff', '(', step.right.places[0], ',', step.right.places[1], ')']);
      const i = this.lime.direct(['intersection', '(', step.right.places[0], ',', step.right.places[1], ')']);
      step.rus(this.lime.build('set')(...s.places, ...i.places));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionUnion;
