// Include
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Common bracket function class
class LimeFunctionCommonBracket extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'commonBracket', mode });

    // Nested operation
    this.operations.n = [
      'en()',
    ];

    // Algorithms
    this.algorithms.set('n()', (step) => {
      // Create nested equation
      const { data } = step, nest = []; let i = step.pos, lv = 0;
      while (i + 1 < data.length) {
        if (this.lime.identify('commonBracket')(data[i + 1])) {
          lv += data[i + 1].mode === 'n' ? 1 : -1;
          if (lv < 0) { break; }
        }
        nest.push(data[++i]);
      }
      if (lv >= 0) {
        throw new Error('error:unmatchedBrackets');
      }

      // Evaluate and splice
      step.ns(nest.length + 2, this.lime.direct([...nest]));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionCommonBracket;
