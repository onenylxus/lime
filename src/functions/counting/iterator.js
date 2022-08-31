// Require
const LimeFunction = require('../../structs/function');

// Iterator function class
class LimeFunctionIterator extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'iterator', mode });

    // Right unary operation
    this.operations.r = [
      'er(arg{{int|rat}[$]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{{int|rat}[$]})', (step) => {
      const n = step.right.places.length;
      if (n < 2 || n > 3) {
        throw new Error('error:invalidArgumentLength');
      }

      const [l, r] = step.right.places;
      if (this.lime.direct([l, '==', r]).value) {
        step.rus(this.lime.build('set')(l));
      } else {
        const g = this.lime.direct([r, '-', l, '>', 0]).value;
        const s = n > 2 ? this.lime.direct(['abs', '(', step.right.places[2], ')']) : 1;
        if (this.lime.direct([s, '==', 0]).value) {
          step.rus(this.lime.build('set')(l));
        } else {
          const a = [];
          let d = this.lime.direct([l]);

          if (g) {
            while (this.lime.direct([d, '<=', r]).value) {
              a.push(d);
              d = this.lime.direct([d, '+', s]);
            }
          } else {
            while (this.lime.direct([d, '>=', r]).value) {
              a.push(d);
              d = this.lime.direct([d, '-', s]);
            }
          }

          step.rus(this.lime.build('set')(...a));
        }
      }
    });
  }
}

// Export
module.exports = LimeFunctionIterator;
