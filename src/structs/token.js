// Require
const Types = require('../../utils/types');

// Token class
class LimeToken {
  // Constructor
  constructor(lime, type, value) {
    // Parent
    this.lime = lime;

    // Properties
    this.type = ['integer', 'whitespace', 'symbol', 'variable'].includes(type) ? type : 'symbol';
    this.value = Types.isString(value) ? value : '';
  }
}

// Export
module.exports = LimeToken;
