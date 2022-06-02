// Require
const LimeFunction = require('../../structs/function');

// Convert to symbol function class
class LimeFunctionToSymbol extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'toSymbol', mode });

    // Right unary operation
    this.operations.r = [
      'er(var)',
    ];

    // Algorithms
    this.algorithms.set('r(var)', (step) => {
      step.rus(this.lime.build('symbol')(step.right.key));
    });
  }
}

// Export
module.exports = LimeFunctionToSymbol;
