// Require
const LimeExpression = require('../structs/expression');

/* ------------------------ division ------------------------ */

// Complex expression class
class LimeExpressionComplex extends LimeExpression {
  // Constructor
  constructor(lime, rPlace, iPlace) {
    // Super from expression class
    super(lime, { name: 'complex', shorthand: 'comp', isSimple: true });

    // Build expression
    if (!this.lime.identify('integer', 'rational')(rPlace, iPlace)) {
      throw new Error('issue:invalidExpressionInConstruct');
    }
    this.rPlace = rPlace;
    this.iPlace = iPlace;
  }

  /* ------------------------ division ------------------------ */

  // Get value
  get value() {
    return { r: this.rPlace.value, i: this.iPlace.value };
  }

  /* ------------------------ division ------------------------ */

  // Convert to boolean
  toBoolean() {
    return this.lime.build('boolean')(this.value.r || this.value.i);
  }

  // Simplify function
  simplify() {
    // Return
    if (this.lime.direct([this.iPlace, '==', 0]).value) {
      return this.rPlace.simplify();
    }
    return this.lime.build('complex')(this.rPlace.simplify(), this.iPlace.simplify());
  }

  // Finalize function
  finalize() {
    return this.simplify();
  }

  // Print function
  print() {
    const s = this.lime.direct(['sgn', '(', this.iPlace, ')']).value;
    return `${this.value.r === 0 ? '' : `${this.rPlace.print()}${s > 0 ? '+' : ''}`}${this.value.i === 1 ? '' : this.value.i === -1 ? '-' : this.iPlace.print()}i`;
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeExpressionComplex;
