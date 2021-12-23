// Require
const { Types } = require('@onenylxus/helpers');
const LimeExpression = require('../structs/expression');

/* ------------------------ division ------------------------ */

// Set expression class
class LimeExpressionSet extends LimeExpression {
  // Constructor
  constructor(lime, ...places) {
    // Super from expression class
    super(lime, { name: 'set', isSimple: false });

    // Build expression
    if (
      !this.lime.identify('expression')(...places)
      && !Types.isNull(places[0])
    ) {
      throw new Error('issue:invalidExpressionInConstruct');
    }

    this.places = [];
    for (let i = 0; i < places.length; i++) {
      if (!this.places.some((v, j) => i !== j && this.lime.direct([v, '==', places[i]]).value)) {
        this.places.push(places[i]);
      }
    }
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
    this.places = this.places.map((p) => p.simplify());
    return this;
  }

  // Finalize function
  finalize() {
    this.places = this.places.map((p) => p.finalize());
    return this;
  }

  // Print function
  print() {
    const space = this.lime.config.testMode ? '' : ' '; let str = '{';
    for (let i = 0; i < this.length; i++) {
      str += space + this.places[i].print() + (i < this.length - 1 ? ',' : `${space}}`);
    }
    return str;
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeExpressionSet;
