// Require
const LimeExpression = require('../structs/expression');

/* ------------------------ division ------------------------ */

// Argument expression class
class LimeExpressionArgument extends LimeExpression {
  // Constructor
  constructor(lime, ...places) {
    // Super from expression class
    super(lime, { name: 'argument', isSimple: false });

    // Build expression
    if (!this.lime.identify('expression')(...places)) {
      throw new Error('issue:invalidExpressionInConstruct');
    }
    this.places = places;
  }

  /* ------------------------ division ------------------------ */

  // Get value
  get value() {
    return this.places.map((p) => p.value);
  }

  // Get length
  get length() {
    return this.places.length;
  }

  // Get empty argument status
  get isEmpty() {
    return this.length === 0;
  }

  /* ------------------------ division ------------------------ */

  // Simplify function
  simplify() {
    return this.places.map((p) => p.simplify());
  }

  // Finalize function
  finalize() {
    return this.length === 1 ? this.places[0].finalize() : this.places.map((p) => p.finalize());
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeExpressionArgument;
