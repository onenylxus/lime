// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Magic matrix function class
class LimeFunctionMagicMatrix extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'magicMatrix', mode });

    // Operations
    this.operations.r = [
      'er(arg{int[1]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{int[1]})', (step) => {
      const n = step.right.value[0]; const { places } = this.lime.direct(['zeromat', '(', n, ')']);

      // Odd
      if (n % 2 === 1) {
        let i = 0; let j = Math.floor(n / 2); let k = 1;
        while (k <= n * n) {
          places[j++][i--] = this.lime.direct([k]);
          if (k++ % n === 0) {
            i += 2;
            j--;
          } else if (j === n) {
            j -= n;
          } else if (i < 0) {
            i += n;
          }
        }
      }

      // Singly even
      else if (n % 4 === 2) {
        if (n === 2) {
          throw new Error('warn:magicMatrixDimensionTwo');
        }

        const p = n / 2; const m = this.lime.direct(['magicmat', '(', p, ')']).places;
        for (let j = 0; j < p; j++) {
          for (let i = 0; i < p; i++) {
            places[j][i] = this.lime.direct([m[j][i]]);
            places[j + p][i] = this.lime.direct([m[j][i], '+', 3 * p * p]);
            places[j][i + p] = this.lime.direct([m[j][i], '+', 2 * p * p]);
            places[j + p][i + p] = this.lime.direct([m[j][i], '+', p * p]);
          }
        }

        const a = []; const b = []; const q = (n - 2) / 4;
        for (let k1 = 0; k1 < p; k1++) {
          a.push(k1 + 1);
        }
        for (let k2 = 0; k2 < q; k2++) {
          b.push(k2 + 1);
        }
        for (let k3 = n - q + 1; k3 < n; k3++) {
          b.push(k3 + 1);
        }

        const f = (i1, j1) => (i2, j2) => {
          const t = places[j1][i1];
          places[j1][i1] = places[j2][i2];
          places[j2][i2] = t;
        };

        for (let v = 0; v < p; v++) {
          for (let u = 0; u < b.length; u++) {
            f(b[u] - 1, v)(b[u] - 1, v + p);
          }
        }
        f(0, q)(0, q + p);
        f(q, q)(q, q + p);
      }

      // Doubly even
      else {
        const a = [];
        for (let j = 0; j < n; j++) {
          a.push([]);
          for (let i = 0; i < n; i++) {
            a[j].push(this.lime.direct([Math.floor((j + 1) % 4 / 2)]));
            places[j][i] = this.lime.direct([j * n + i + 1]);
          }
        }

        for (let v = 0; v < n; v++) {
          for (let u = 0; u < n; u++) {
            if (a[v][u].value === a[u][v].value) {
              places[v][u] = this.lime.direct([n * n + 1, '-', places[v][u]]);
            }
          }
        }
      }

      step.rus(this.lime.build('matrix')(places));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionMagicMatrix;
