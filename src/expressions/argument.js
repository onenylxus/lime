// Require
const { Types } = require('@onenylxus/helpers');
const LimeExpression = require('../structs/expression');

/* ------------------------ division ------------------------ */

// Argument class
class LimeExpressionArgument extends LimeExpression {
  // Constructor
  constructor(lime, ...places) {
    // Super from expression class
    super(lime, { name: 'argument', isSimple: false });

    // Build expression
    if (
      !this.lime.identify('expression')(...places)
      && !(Types.isNull(places[0]))
    ) {
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
    return this.isEmpty ? 0 : this.places.length;
  }

  // Get empty argument status
  get isEmpty() {
    return Types.isNull(this.places[0]);
  }

  /* ------------------------ division ------------------------ */

  // Simplify function
  simplify() {
    return this.places.map((p) => p.simplify());
  }

  // Finalize function
  finalize() {
    if (this.isEmpty) {
      throw new Error('error:emptyArgumentInFinalize');
    }
    if (this.length === 1) {
      return this.places[0].finalize();
    }
    return this.places.map((p) => p.finalize());
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeExpressionArgument;
