// Require
const LimeExpression = require('../structs/expression');
const Types = require('../../utils/types');

/* ------------------------ division ------------------------ */

// Integer class
class LimeInteger extends LimeExpression {
  // Constructor
  constructor(lime, value) {
    // Super from expression class
    super(lime, { isSimple: true });

    // Properties
    this.value = Types.isNumber(+value) ? Math.trunc(+value) : null;
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeInteger;
