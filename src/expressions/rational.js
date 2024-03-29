// Require
const LimeExpression = require('../structs/expression');

// Rational expression class
class LimeExpressionRational extends LimeExpression {
  // Constructor
  constructor(lime, nPlace, dPlace) {
    // Super from expression class
    super(lime, require('../../lib/expressions/rational.json'));

    // Build expression
    if (!this.lime.identify('integer')(nPlace, dPlace)) {
      throw new Error('issue:invalidExpressionInConstruct');
    }
    this.nPlace = nPlace;
    this.dPlace = dPlace;
  }

  // Get value
  get value() {
    return { n: this.nPlace.value, d: this.dPlace.value };
  }

  // Convert to boolean
  toBoolean() {
    return this.lime.build('boolean')(this.value.n / this.value.d);
  }

  // Convert to complex
  toComplex() {
    return this.lime.build('complex')(this, this.lime.build('integer')(0));
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
    return this.lime.build('rational')(this.nPlace.simplify(), this.dPlace.simplify());
  }

  // Finalize function
  finalize() {
    return this.simplify();
  }

  // Print function
  print() {
    if (this.lime.config.get('decimalPlaces') >= 0) {
      const r = 10 ** this.lime.config.get('decimalPlaces');
      return `${Math.round(this.value.n * r / this.value.d) / r}`;
    }
    return `${this.nPlace.print()}/${this.dPlace.print()}`;
  }
}

// Export
module.exports = LimeExpressionRational;
