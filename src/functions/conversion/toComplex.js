// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Convert to complex function class
class LimeFunctionToComplex extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'toComplex', mode });

    // Right unary operation
    this.operations.r = [
      'er(arg{expr[1]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{expr[1]})', (step) => {
      switch (this.lime.direct(['type', step.right]).value) {
        case 'boolean':
          step.rus(this.lime.direct(['complex', '(', 'integer', '(', step.right.places[0], ')', ')']));
          break;

        case 'complex':
          step.rus(step.right.places[0]);
          break;

        case 'integer':
        case 'rational':
          step.rus(this.lime.build('complex')(step.right.places[0], this.lime.direct([0])));
          break;

        default:
          throw new Error('error:invalidExpressionType');
      }
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionToComplex;
