// Require
const LimeFunction = require('../../structs/function');

// Convert to integer function class
class LimeFunctionToInteger extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'toInteger', mode });

    // Right unary operation
    this.operations.r = [
      'er(arg{expr[1]})',
    ];

    // Algorithms
    this.algorithms.set('r(arg{expr[1]})', (step) => {
      switch (this.lime.direct(['type', step.right]).value) {
        case 'boolean':
          if (this.lime.config.get('strictBoolean')) {
            throw new Error('warn:strictBoolean');
          }
          step.rus(this.lime.direct([+step.right.places[0].value]));
          break;

        case 'complex':
          step.rus(step.right.places[0].rPlace);
          break;

        case 'integer':
          step.rus(step.right.places[0]);
          break;

        case 'rational':
          step.rus(this.lime.direct(['trunc', '(', step.right.places[0], ')']));
          break;

        case 'string':
          step.rus(this.lime.direct(['len', '(', step.right.places[0], ')']));
          break;

        default:
          throw new Error('error:invalidExpressionType');
      }
    });
  }
}

// Export
module.exports = LimeFunctionToInteger;
