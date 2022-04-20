// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Convert to boolean function class
class LimeFunctionToBoolean extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'toBoolean', mode });

    // Right unary operation
    this.operations.r = [
      'er(arg{expr[1]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{expr[1]})', (step) => {
      switch (this.lime.direct(['type', step.right]).value) {
        case 'boolean':
          step.rus(step.right.places[0]);
          break;

        case 'complex':
          step.rus(this.lime.direct([step.right.places[0].rPlace, '!=', 0, '||', step.right.places[0].iPlace, '!=', 0]));
          break;

        case 'integer':
        case 'rational':
          step.rus(this.lime.direct([step.right.places[0], '!=', 0]));
          break;

        case 'matrix':
        case 'set':
        case 'string':
          step.rus(this.lime.build('boolean')(!step.right.places[0].isEmpty));
          break;

        default:
          throw new Error('error:invalidExpressionType');
      }
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionToBoolean;
