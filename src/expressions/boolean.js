// Require
const LimeExpression = require('../structs/expression');

/* ------------------------ division ------------------------ */

// Boolean class
class LimeExpressionBoolean extends LimeExpression {
  // Constructor
  constructor(lime, value) {
    // Super from expression class
    super(lime, { isSimple: true });

    // Build expression
    this.raw = value;
  }

  /* ------------------------ division ------------------------ */

  // Get value
  get value() {
    return !!this.raw;
  }

  /* ------------------------ division ------------------------ */

  // Convert to integer
  toInteger() {
    return this.value ? this.lime.direct([1]) : this.lime.direct([0]);
  }

  // Convert to rational
  toRational() {
    return this.toInteger().toRational();
  }

  // Simplify function
  simplify() {
    return this.lime.build('boolean')(this.value);
  }

  // Print function
  print() {
    return this.value ? 'true' : 'false';
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeExpressionBoolean;
