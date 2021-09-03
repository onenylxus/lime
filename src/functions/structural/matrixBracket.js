// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Matrix bracket function class
class LimeFunctionMatrixBracket extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'matrixBracket', mode });

    // Nested operation
    this.operations.n = [
      'en()',
    ];

    // Algorithms
    this.algorithms.set('n()', (step) => {
      // Create nested equation
      const { data } = step; const nest = [[[]]]; const stack = [this];
      let i = step.pos; let row = 0; let col = 0;
      while (i + 1 < data.length && stack.length > 0) {
        // Brackets
        if (this.lime.identify('commonBracket', 'matrixBracket')(data[i + 1])) {
          if (data[i + 1].mode === 'n') {
            stack.push(data[i + 1]);
          } else {
            if (data[i + 1].name !== stack[stack.length - 1].name) {
              throw new Error('error:unmatchedBrackets');
            }
            stack.pop();
            if (stack.length === 0) { break; }
          }
        }

        // Splits
        else if (this.lime.identify('columnSplit')(data[i + 1])) {
          nest[row].push([]);
          col++;
          i++;
        } else if (this.lime.identify('rowSplit')(data[i + 1])) {
          if (row > 0 && nest[row].length !== nest[0].length) {
            throw new Error();
          }

          nest.push([[]]);
          row++;
          col = 0;
          i++;
        }

        // General expressions and functions
        nest[row][col].push(data[++i]);
      }
      if (stack.length > 0) {
        throw new Error('error:unmatchedBrackets');
      }

      // Evaluate and splice
      const places = []; let len = 2 + (++row) * (++col);
      for (let j = 0; j < row; j++) {
        places.push([]);
        for (let k = 0; k < col; k++) {
          len += nest[j][k].length;
          places[j].push(nest[j][k].length > 0 ? this.lime.direct(nest[j][k]) : null);
        }
      }
      step.ns(len, this.lime.build('matrix')(places));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionMatrixBracket;
