// Require
const Types = require('../../utils/types');
const LimeExpression = require('../structs/expression');

/* ------------------------ division ------------------------ */

// Argument class
class LimeExpressionArgument extends LimeExpression {
  // Constructor
  constructor(lime, ...places) {
    // Super from expression class
    super(lime, { name: 'argument', shorthand: 'par', isSimple: false });

    // Build expression
    if (!this.lime.identify('expression')(...places) && !(places.length === 1 && Types.isNull(places[0]))) {
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
    return Types.isNull(this.places[0]);
  }

  /* ------------------------ division ------------------------ */

  // Simplify function
  simplify() {
    if (this.isEmpty) {
      throw new Error('error:emptyArgumentInSimplify');
    }
    if (this.length === 1) {
      return this.places[0].simplify();
    }
    return this.places.map((p) => p.simplify());
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeExpressionArgument;
