// Require
const LimeExpression = require('../structs/expression');

/* ------------------------ division ------------------------ */

// Rational class
class LimeRational extends LimeExpression {
  // Constructor
  constructor(lime, nPlace, dPlace) {
    // Super from expression class
    super(lime, { isSimple: true });

    // Build expression
    if (!this.lime.identify('integer')(nPlace, dPlace)) {
      throw new Error('issue:invalidExpressionInConstruct');
    }
    this.nPlace = nPlace;
    this.dPlace = dPlace;

    // Flip sign if negative denominator
    if (this.value.d < 0) {
      this.value.n *= -1;
      this.value.d *= -1;
    }
  }

  /* ------------------------ division ------------------------ */

  // Get value
  get value() {
    return { n: this.nPlace.value, d: this.dPlace.value };
  }

  /* ------------------------ division ------------------------ */

  // Print function
  print() {
    return `${this.value.n}/${this.value.d}`;
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeRational;
