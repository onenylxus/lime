// Require
const LimeCommand = require('../structs/command');

/* ------------------------ division ------------------------ */

// Clear command
class LimeCommandClear extends LimeCommand {
  // Constructor
  constructor(lime) {
    // Super from command class
    super(lime, { name: 'clear', description: 'clear variables and memory' });

    // Operations
    this.operations.set(0, () => {
      this.lime.variables = new Map();
      this.lime.memory = [];
      return 'Cleared';
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeCommandClear;