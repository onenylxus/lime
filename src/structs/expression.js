// Include
const Types = require('../../utils/types');

/* ------------------------ division ------------------------ */

// Expression class
class LimeExpression {
  // Constructor
  constructor(lime, { ...args }) {
    // Parent
    this.lime = lime;

    // Properties
    this.isSimple = args.hasOwnProperty('isSimple') && Types.isBoolean(args.isSimple) ? args.isSimple : true;
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeExpression;
