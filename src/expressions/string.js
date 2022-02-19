// Require
const LimeExpression = require('../structs/expression');

/* ------------------------ division ------------------------ */

// String expression class
class LimeExpressionString extends LimeExpression {
  // Constructor
  constructor(lime, value) {
    // Super from expression class
    super(lime, { name: 'string', shorthand: 'str', isSimple: true });

    // Build expression
    this.value = value;
  }

  /* ------------------------ division ------------------------ */

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

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeExpressionString;
