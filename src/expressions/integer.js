// Require
const LimeExpression = require('../structs/expression');
const Types = require('../../utils/types');

/* ------------------------ division ------------------------ */

// Integer class
class LimeInteger extends LimeExpression {
  // Constructor
  constructor(lime, value) {
    // Super from expression class
    super(lime, { isSimple: true });

    // Build expression
    if (!Types.isNumber(+value)) {
      throw new Error('issue:invalidExpressionInConstruct');
    }
    this.value = Math.trunc(+value);
  }

  /* ------------------------ division ------------------------ */

  // Convert to rational
  toRational() {
    return this.lime.build('rational')(this, this.lime.build('integer')(1));
  }

  // Print function
  print() {
    return `${this.value}`;
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeInteger;
