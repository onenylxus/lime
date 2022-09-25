// Require
const LimeExpression = require('../structs/expression');

// Variable expression class
class LimeExpressionVariable extends LimeExpression {
  // Constructor
  constructor(lime, key) {
    // Super from expression class
    super(lime, require('../../lib/expressions/variable.json'));

    // Build expression
    this.key = key;
  }

  // Get value
  get value() {
    if (!this.lime.variables.has(this.key)) {
      throw new Error('error:undefinedVariable');
    }
    return this.lime.variables.get(this.key);
  }

  // Simplify function
  simplify() {
    return this.value.simplify();
  }

  // Finalize function
  finalize() {
    return this.simplify();
  }
}

// Export
module.exports = LimeExpressionVariable;
