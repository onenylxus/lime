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
      const places = step.right.places.map((s) => s.places).flat();
      const t = this.lime.direct(['intersection', '(', step.right.places[0], ',', step.right.places[1], ')']).places;
      for (let i = 0; i < places.length; i++) {
        if (t.some((v) => this.lime.direct([places[i], '==', v]).value)) {
          places.splice(i, 1);
        }
      }
      step.rus(this.lime.build('set')(...places, ...t));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionUnion;
