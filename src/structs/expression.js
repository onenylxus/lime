// Require
const { Types } = require('@onenylxus/helpers');

/* ------------------------ division ------------------------ */

// Expression class
class LimeExpression {
  // Constructor
  constructor(lime, { ...args }) {
    // Parent
    this.lime = lime;

    // Properties
    this.name = args.hasOwnProperty('name') ? args.name : this.constructor.name.slice(12);
    this.shorthand = args.hasOwnProperty('shorthand') ? args.shorthand : this.name;
    this.isSimple = args.hasOwnProperty('isSimple') && Types.isBoolean(args.isSimple) ? args.isSimple : true;
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeExpression;
