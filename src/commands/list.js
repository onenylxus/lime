// Require
const LimeCommand = require('../structs/command');

/* ------------------------ division ------------------------ */

// List command
class LimeCommandList extends LimeCommand {
  // Constructor
  constructor(lime) {
    // Super from command class
    super(lime, { name: 'list', description: 'list specified engine property' });

    // Operations
    this.operations.set(1, (prop) => {
      switch (prop) {
        case 'config': return this.lime.config;
        case 'module': return this.lime.module;
        case 'variable': return Object.fromEntries(this.lime.variables);
        case 'memory': return this.lime.memory;
        default: throw new Error('error:invalidListProperty');
      }
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeCommandList;
