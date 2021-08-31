// Include
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Prime function class
class LimeFunctionPrime extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'prime', mode });

    // Operations
    this.operations.r = [
      'er(arg{int[1]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{int[1]})', (step) => {
      const t = step.right.value[0];
      if (t < 1) {
        throw new Error('error:invalidArgumentLogic');
      }
      if (!this.lime.store.hasOwnProperty('prime')) {
        this.lime.store.prime = [2];
      }

      const s = [...this.lime.store.prime]; let i = s[s.length - 1] + 1;
      while (s.length < t) {
        if (s.every((p) => i % p !== 0)) {
          s.push(i);
        }
        i++;
      }
      this.lime.store.prime = [...s];
      step.rus(this.lime.direct([s[t - 1]]));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionPrime;
