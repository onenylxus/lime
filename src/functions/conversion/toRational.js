// Require
const LimeFunction = require('../../structs/function');

// Convert to rational function class
class LimeFunctionToRational extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'toRational', mode });

    // Right unary operation
    this.operations.r = [
      'er(arg{expr[1]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{expr[1]})', (step) => {
      switch (this.lime.direct(['type', step.right]).value) {
        case 'boolean':
          step.rus(this.lime.direct(['rational', '(', 'integer', '(', step.right.places[0], ')', ')']));
          break;

        case 'complex':
          step.rus(this.lime.build('complex')(this.lime.direct(['rational', '(', step.right.places[0].rPlace, ')']), this.lime.direct(['rational', '(', step.right.places[0].iPlace, ')'])));
          break;

        case 'integer':
          step.rus(this.lime.build('rational')(step.right.places[0], this.lime.direct([1])));
          break;

        case 'rational':
          step.rus(step.right.places[0]);
          break;

        default:
          throw new Error('error:invalidExpressionType');
      }
    });
  }
}

// Export
module.exports = LimeFunctionToRational;
