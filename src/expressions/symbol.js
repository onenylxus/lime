// Require
const LimeExpression = require('../structs/expression');

/* ------------------------ division ------------------------ */

// Symbol expression class
class LimeExpressionSymbol extends LimeExpression {
  // Constructor
  constructor(lime, key) {
    // Super from expression class
    super(lime, { name: 'symbol', shorthand: 'sym', isSimple: true });

    // Build expression
    this.key = key;
  }

  /* ------------------------ division ------------------------ */

  // Get value
  get value() {
    return this.key;
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
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeExpressionSymbol;
