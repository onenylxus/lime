// Require
const LimeExpression = require('../structs/expression');

/* ------------------------ division ------------------------ */

// Variable expression class
class LimeExpressionVariable extends LimeExpression {
  // Constructor
  constructor(lime, key) {
    // Super from expression class
    super(lime, { name: 'variable', isSimple: true });

    // Build expression
    this.key = key;
  }

  /* ------------------------ division ------------------------ */

  // Get value
  get value() {
    if (!this.lime.variables.has(this.key)) {
      throw new Error('error:undefinedVariable');
    }
    return this.lime.variables.get(this.key);
  }

  /* ------------------------ division ------------------------ */

  // Simplify function
  simplify() {
    return this.value.simplify();
  }

  // Finalize function
  finalize() {
    return this.simplify();
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeExpressionVariable;
