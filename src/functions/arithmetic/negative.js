// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Negative function class
class LimeFunctionNegative extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'negative', mode });

    // Right unary operation
    this.operations.r = [
      'tr(_!)',
      'tr(_+)',
      'tr(_-)',

      'cr(var->expr)',
      'cr(arg{expr[1]}->expr)',
      'cr(bool->int)',

      'er(int)',
      'er(rat)',
      'er(_+)',
      'er(_-)',
    ];

    // Algorithms
    this.algorithms.set('r(int)', (step) => {
      step.rus(this.lime.direct([-1, '*', step.right]));
    });

    this.algorithms.set('r(rat)', (step) => {
      step.rus(this.lime.build('rational')(
        this.lime.direct(['-', step.right.nPlace]),
        step.right.dPlace,
      ));
    });

    this.algorithms.set('r(_+)', (step) => {
      step.rus(this.lime.refer('_-'));
    });

    this.algorithms.set('r(_-)', (step) => {
      step.rus(this.lime.refer('_+'));
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionNegative;
