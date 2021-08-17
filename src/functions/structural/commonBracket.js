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
      const { data } = step, nest = [[]]; let i = step.pos, lv = 0, part = 0;
      while (i + 1 < data.length) {
        if (this.lime.identify('commonBracket')(data[i + 1])) {
          lv += data[i + 1].mode === 'n' ? 1 : -1;
          if (lv < 0) { break; }
        } else if (this.lime.identify('columnSplit')(data[i + 1])) {
          nest.push([]);
          part++;
          i++;
        }
        nest[part].push(data[++i]);
      }
      if (lv >= 0) {
        throw new Error('error:unmatchedBrackets');
      }

      // Evaluate and splice
      const places = []; let len = 2 + part;
      for (let j = 0; j <= part; j++) {
        len += nest[j].length;
        places.push(nest[j].length > 0 ? this.lime.direct(nest[j]) : null);
      }
      step.ns(len, this.lime.build('argument')(...places));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionCommonBracket;
