// Require
const LimeExpression = require('../structs/expression');

/* ------------------------ division ------------------------ */

// Rational class
class LimeExpressionRational extends LimeExpression {
  // Constructor
  constructor(lime, nPlace, dPlace) {
    // Super from expression class
    super(lime, { name: 'rational', shorthand: 'rat', isSimple: true });

    // Build expression
    if (!this.lime.identify('integer')(nPlace, dPlace)) {
      throw new Error('issue:invalidExpressionInConstruct');
    }
    this.nPlace = nPlace;
    this.dPlace = dPlace;
  }

  /* ------------------------ division ------------------------ */

  // Get value
  get value() {
    return { n: this.nPlace.value, d: this.dPlace.value };
  }

  /* ------------------------ division ------------------------ */

  // Convert to boolean
  toBoolean() {
    return this.lime.build('boolean')(this.value.n / this.value.d);
  }

  // Simplify function
  simplify() {
    // Reduce by common factor
    const f = this.lime.direct(['gcd', '(', this.nPlace, ',', this.dPlace, ')']);
    this.nPlace = this.lime.direct([this.nPlace, '/', f]);
    this.dPlace = this.lime.direct([this.dPlace, '/', f]);

    // Flip negative denominator
    if (this.value.d < 0) {
      this.nPlace = this.lime.direct(['-', this.nPlace]);
      this.dPlace = this.lime.direct(['-', this.dPlace]);
    }

    // Return
    if (this.value.d === 1) {
      return this.nPlace.simplify();
    }
    return this.lime.build('rational')(
      this.nPlace.simplify(),
      this.dPlace.simplify(),
    );
  }

  // Finalize function
  finalize() {
    return this.simplify();
  }

  // Print function
  print() {
    return `${this.value.n}/${this.value.d}`;
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeExpressionRational;
