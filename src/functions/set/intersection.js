// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Intersection function class
class LimeFunctionIntersection extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'intersection', mode });

    // Operations
    this.operations.r = [
      'er(arg{set[2]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{set[2]})', (step) => {
      const l = step.right.places[0]; const r = step.right.places[1]; const places = [];
      for (let i = 0; i < l.length; i++) {
        if (r.places.some((v) => this.lime.direct([l.places[i], '==', v]).value)) {
          places.push(l.places[i]);
        }
      }
      step.rus(this.lime.build('set')(...places));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionIntersection;
