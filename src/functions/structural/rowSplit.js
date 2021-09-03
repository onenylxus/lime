// Require
const LimeFunction = require('../../structs/function');

/* ------------------------ division ------------------------ */

// Row split function class
class LimeFunctionRowSplit extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'rowSplit', mode });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunctionRowSplit;
