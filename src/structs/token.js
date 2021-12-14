// Require
const { Types } = require('@onenylxus/helpers');
const Compiler = require('../system/compiler');

/* ------------------------ division ------------------------ */

// Token class
class Token {
  // Constructor
  constructor(lime, type, value) {
    // Parent
    this.lime = lime;

    // Properties
    this.type = ['integer', 'whitespace', 'symbol', 'variable'].includes(type) ? type : 'symbol';
    this.value = Types.isString(value) ? value : '';
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = Compiler.generic(Token, 'Token');
