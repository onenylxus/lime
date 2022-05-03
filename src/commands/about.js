// Require
const banner = require('../../utils/banner');
const LimeCommand = require('../structs/command');

// About command class
class LimeCommandAbout extends LimeCommand {
  // Constructor
  constructor(lime) {
    // Super from command class
    super(lime, { name: 'about', description: 'show information about the engine' });

    // Operations
    this.operations.set(0, () => banner());
  }
}

// Export
module.exports = LimeCommandAbout;
