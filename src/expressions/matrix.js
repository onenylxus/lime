// Require
const { Types } = require('@onenylxus/helpers');
const LimeExpression = require('../structs/expression');

/* ------------------------ division ------------------------ */

// Matrix class
class LimeExpressionMatrix extends LimeExpression {
  // Constructor
  constructor(lime, places) {
    // Super from expression class
    super(lime, { name: 'matrix', isSimple: false });

    // Build expression
    if (
      !this.lime.identify('expression')(...places.flat())
      && !(Types.isNull(places[0][0]))
    ) {
      throw new Error('issue:invalidExpressionInConstruct');
    }
    const l = places[0].length;
    if (places.some((r) => r.length !== l)) {
      throw new Error('error:invalidMatrixDimensions');
    }
    this.places = places;
  }

  /* ------------------------ division ------------------------ */

  // Get value
  get value() {
    return this.places.map((r) => r.map((p) => p.value));
  }

  // Get row
  get row() {
    return this.isEmpty ? 0 : this.places.length;
  }

  // Get column
  get column() {
    return this.isEmpty ? 0 : this.places[0].length;
  }

  // Get size
  get size() {
    return this.row * this.column;
  }

  // Get empty matrix status
  get isEmpty() {
    return Types.isNull(this.places[0][0]);
  }

  /* ------------------------ division ------------------------ */

  // Simplify function
  simplify() {
    this.places = this.places.map((r) => r.map((p) => p.simplify()));
    return this;
  }

  // Finalize function
  finalize() {
    this.places = this.places.map((r) => r.map((p) => p.finalize()));
    return this;
  }

  // Print function
  print() {
    let str = '';

    // Compact display
    if (this.lime.config.testMode) {
      str += '[';
      for (let cv = 0; cv < this.row; cv++) {
        str += cv === 0 ? '' : ';';
        for (let cu = 0; cu < this.column; cu++) {
          str += (cu === 0 ? '' : ',') + this.places[cv][cu].print();
        }
      }
      str += ']';
    }

    // Aligned display
    else {
      const len = this.places.map((r) => r.map((p) => p.print().length)); const max = [];
      for (let i = 0; i < this.column; i++) {
        let m = 0;
        for (let j = 0; j < this.row; j++) {
          m = Math.max(len[j][i], m);
        }
        max.push(m);
      }

      for (let av = 0; av < this.row; av++) {
        for (let au = 0; au < this.column; au++) {
          str += new Array(max[au] - len[av][au] + this.lime.config.tabSize + 1).join(' ') + this.places[av][au].print();
        }
        str += (av < this.row - 1 ? '\n' : '');
      }
    }

    return str;
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeExpressionMatrix;
