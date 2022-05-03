// Require
const LimeFunction = require('../../structs/function');

// Row split function class
class LimeFunctionRowSplit extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'rowSplit', mode });
  }
}

// Export
module.exports = LimeFunctionRowSplit;
