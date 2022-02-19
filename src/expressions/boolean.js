// Require
const LimeExpression = require('../structs/expression');

/* ------------------------ division ------------------------ */

// Boolean expression class
class LimeExpressionBoolean extends LimeExpression {
  // Constructor
  constructor(lime, value) {
    // Super from expression class
    super(lime, { name: 'boolean', shorthand: 'bool', isSimple: true });

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
    if (this.lime.config.strictBoolean) {
      throw new Error('warn:strictBoolean');
    }
    return this.lime.direct([+this.value]);
  }

  // Simplify function
  simplify() {
    return this.lime.build('boolean')(this.value);
  }

  // Finalize function
  finalize() {
    return this.simplify();
  }

  // Print function
  print() {
    return this.value ? 'true' : 'false';
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeExpressionBoolean;
