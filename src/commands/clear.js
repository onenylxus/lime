// Require
const LimeCommand = require('../structs/command');

// Clear command class
class LimeCommandClear extends LimeCommand {
  // Constructor
  constructor(lime) {
    // Super from command class
    super(lime, require('../../lib/commands/clear.json'));

    // Operations
    this.operations.set(0, () => {
      this.lime.variables = new Map();
      this.lime.memory = [];
      this.lime.store = {};
      return 'Cleared';
    });
  }
}

// Export
module.exports = LimeCommandClear;
