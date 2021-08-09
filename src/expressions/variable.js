// Require
const LimeExpression = require('../structs/expression');

/* ------------------------ division ------------------------ */

// Variable class
class LimeVariable extends LimeExpression {
  // Constructor
  constructor(lime, key) {
    // Super from expression class
    super(lime, { isSimple: true });

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
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeVariable;
