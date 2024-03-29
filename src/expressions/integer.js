// Require
const Types = require('../../utils/types');
const LimeExpression = require('../structs/expression');

// Integer expression class
class LimeExpressionInteger extends LimeExpression {
  // Constructor
  constructor(lime, value) {
    // Super from expression class
    super(lime, require('../../lib/expressions/integer.json'));

    // Build expression
    if (!Types.isNumber(+value)) {
      throw new Error('issue:invalidExpressionInConstruct');
    }
    this.string = `${value}`;
  }

  // Get value
  get value() {
    return Math.trunc(+this.string);
  }

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

// Export
module.exports = LimeExpressionInteger;
