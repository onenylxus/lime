// Require
const { Types } = require('@onenylxus/helpers');
const Compiler = require('../system/compiler');

/* ------------------------ division ------------------------ */

// Expression class
class Expression {
  // Constructor
  constructor(lime, { ...args }) {
    // Parent
    this.lime = lime;

    // Properties
    this.name = args.hasOwnProperty('name') ? args.name : this.constructor.name.slice(12);
    this.isSimple = args.hasOwnProperty('isSimple') && Types.isBoolean(args.isSimple) ? args.isSimple : true;
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = Compiler.generic(Expression, 'Expression');
