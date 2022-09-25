// Require
const LimeExpression = require('../structs/expression');

// String expression class
class LimeExpressionString extends LimeExpression {
  // Constructor
  constructor(lime, value) {
    // Super from expression class
    super(lime, require('../../lib/expressions/string.json'));

    // Build expression
    this.value = value;
  }

  // Get empty string status
  get isEmpty() {
    return this.value.length === 0;
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
    return `"${this.value}"`;
  }
}

// Export
module.exports = LimeExpressionString;
