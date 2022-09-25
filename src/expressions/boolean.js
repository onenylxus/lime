// Require
const LimeExpression = require('../structs/expression');

// Boolean expression class
class LimeExpressionBoolean extends LimeExpression {
  // Constructor
  constructor(lime, value) {
    // Super from expression class
    super(lime, require('../../lib/expressions/boolean.json'));

    // Build expression
    this.raw = value;
  }

  // Get value
  get value() {
    return !!this.raw;
  }

  // Convert to integer
  toInteger() {
    if (this.lime.config.get('strictBoolean')) {
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

// Export
module.exports = LimeExpressionBoolean;
