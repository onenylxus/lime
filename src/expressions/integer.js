// Require
const LimeExpression = require('../structs/expression');
const Types = require('../../utils/types');

/* ------------------------ division ------------------------ */

// Integer class
class LimeExpressionInteger extends LimeExpression {
  // Constructor
  constructor(lime, value) {
    // Super from expression class
    super(lime, { isSimple: true });

    // Build expression
    if (!Types.isNumber(+value)) {
      throw new Error('issue:invalidExpressionInConstruct');
    }
    this.string = `${value}`;
  }

  /* ------------------------ division ------------------------ */

  // Get value
  get value() {
    return Math.trunc(+this.string);
  }

  /* ------------------------ division ------------------------ */

  // Convert to rational
  toRational() {
    return this.lime.build('rational')(this, this.lime.build('integer')(1));
  }

  // Simplify function
  simplify() {
    return this.lime.build('integer')(this.value);
  }

  // Print function
  print() {
    return `${this.value}`;
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeExpressionInteger;
