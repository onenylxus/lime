// Require
const LimeExpression = require('../structs/expression');

// Matrix expression class
class LimeExpressionMatrix extends LimeExpression {
  // Constructor
  constructor(lime, places) {
    // Super from expression class
    super(lime, require('../../lib/expressions/matrix.json'));

    // Build expression
    if (!this.lime.identify('expression')(...places.flat())) {
      throw new Error('issue:invalidExpressionInConstruct');
    }
    if (places.flat().length > 0 && places.some((r) => r.length !== places[0].length)) {
      throw new Error('error:invalidMatrixDimensions');
    }
    this.places = places.flat().length > 0 ? places : [];
  }

  // Get value
  get value() {
    return this.places.map((r) => r.map((p) => p.value));
  }

  // Get row
  get row() {
    return this.places.length;
  }

  // Get column
  get column() {
    return this.row === 0 ? 0 : this.places[0].length;
  }

  // Get size
  get size() {
    return this.row * this.column;
  }

  // Get empty matrix status
  get isEmpty() {
    return this.size === 0;
  }

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
    if (this.lime.config.get('testMode')) {
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
          str += new Array(max[au] - len[av][au] + this.lime.config.get('tabSize') + 1).join(' ') + this.places[av][au].print();
        }
        str += (av < this.row - 1 ? '\n' : '');
      }
    }

    return str;
  }
}

// Export
module.exports = LimeExpressionMatrix;
