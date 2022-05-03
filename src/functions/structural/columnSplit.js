// Require
const LimeFunction = require('../../structs/function');

// Column split function class
class LimeFunctionColumnSplit extends LimeFunction {
  // Constructor
  constructor(lime, mode) {
    // Super from function class
    super(lime, { name: 'columnSplit', mode });
  }
}

// Export
module.exports = LimeFunctionColumnSplit;
