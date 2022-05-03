// Require
const LimeFunction = require('../../structs/function');

// Reduced row echelon form function class
class LimeFunctionReducedRowEchelonForm extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'reducedRowEchelonForm', mode });

    // Right unary operation
    this.operations.r = [
      'er(arg{mat[1]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{mat[1]})', (step) => {
      const m = step.right.places[0];
      let s = 0; let n = m.row;

      while (s < n) {
        if (m.places[s].every((v) => this.lime.direct([v, '==', 0]).value)) {
          m.places.splice(--n, 0, ...m.places.splice(s, 1));
        } else {
          s++;
        }
      }
      s = 0;

      let c = 0; let f = 0;
      while (c < m.column && f < n) {
        if (s >= n) {
          c++; s = f;
        }

        else if (this.lime.direct([m.places[s][c], '!=', 0]).value) {
          m.places.splice(f, 0, ...m.places.splice(s, 1));
          m.places[f] = m.places[f].map((v) => this.lime.direct([v, '/', m.places[f][c]]));

          for (let j = 0; j < n; j++) {
            if (j !== f) {
              const r = m.places[j][c];
              for (let i = c; i < m.column; i++) {
                m.places[j][i] = this.lime.direct([m.places[j][i], '-', m.places[f][i], '*', r]);
              }
            }
          }

          f++; s = n;
        }

        else {
          s++;
        }
      }

      const a = [];
      for (let v = 0; v < m.row; v++) {
        a.push([]);
        for (let u = 0; u < m.column; u++) {
          a[v].push(m.places[v][u]);
        }
      }
      step.rus(this.lime.build('matrix')(a));
    });
  }
}

// Export
module.exports = LimeFunctionReducedRowEchelonForm;
