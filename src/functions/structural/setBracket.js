// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Set bracket function class
class LimeFunctionSetBracket extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'setBracket', mode });

    // Nested operation
    this.operations.n = [
      'en()',
    ];

    // Algorithms
    this.algorithms.set('n()', (step) => {
      // Create nested equation
      const { data } = step; const nest = [[]]; const stack = [this];
      let i = step.pos; let part = 0;
      while (i + 1 < data.length && stack.length > 0) {
        // Brackets
        if (this.lime.identify('commonBracket', 'matrixBracket', 'setBracket')(data[i + 1])) {
          if (data[i + 1].mode === 'n') {
            stack.push(data[i + 1]);
          } else {
            if (data[i + 1].name !== stack[stack.length - 1].name) {
              throw new Error('error:unmatchedBrackets');
            }
            stack.pop();
            if (stack.length === 0) { break; }
          }
          nest[part].push(data[++i]);
        }

        // Splits
        else if (this.lime.identify('columnSplit')(data[i + 1]) && stack.length === 1) {
          nest.push([]);
          part++;
          i++;
        } else if (this.lime.identify('rowSplit')(data[i + 1]) && stack.length === 1) {
          throw new Error('error:functionAgreement');
        }

        // General expressions and functions
        else {
          nest[part].push(data[++i]);
        }
      }
      if (stack.length > 0) {
        throw new Error('error:unmatchedBrackets');
      }

      // Evaluate and splice
      const places = []; let len = 2 + part;
      for (let j = 0; j <= part; j++) {
        len += nest[j].length;
        places.push(nest[j].length > 0 ? this.lime.direct(nest[j]) : null);
      }
      step.ns(len, this.lime.build('set')(...places));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionSetBracket;
