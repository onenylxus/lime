// Require
const LimeExpression = require('../structs/expression');

// Symbol expression class
class LimeExpressionSymbol extends LimeExpression {
  // Constructor
  constructor(lime, key) {
    // Super from expression class
    super(lime, require('../../lib/expressions/symbol.json'));

    // Build expression
    this.key = key;
  }

  // Get value
  get value() {
    return this.key;
  }

  // Simplify function
  simplify() {
    return this;
  }

  // Finalize function
  finalize() {
    return this.simplify();
  }

  // Print function
  print() {
    return `${this.key}`;
  }
}

// Export
module.exports = LimeExpressionSymbol;
