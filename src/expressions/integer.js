// Require
const { Types } = require('@onenylxus/helpers');
const LimeExpression = require('../structs/expression');

/* ------------------------ division ------------------------ */

// Integer expression class
class LimeExpressionInteger extends LimeExpression {
  // Constructor
  constructor(lime, value) {
    // Super from expression class
    super(lime, { name: 'integer', isSimple: true });

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

  // Convert to boolean
  toBoolean() {
    return this.lime.build('boolean')(this.value);
  }

  // Convert to complex
  toComplex() {
    return this.lime.build('complex')(this, this.lime.build('integer')(0));
  }

  // Convert to rational
  toRational() {
    return this.lime.build('rational')(this, this.lime.build('integer')(1));
  }

  // Simplify function
  simplify() {
    return this.lime.build('integer')(this.value);
  }

  // Finalize function
  finalize() {
    return this.simplify();
  }

  // Print function
  print() {
    return `${this.value}`;
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeExpressionInteger;
