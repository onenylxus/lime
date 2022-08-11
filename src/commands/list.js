// Require
const Types = require('../../utils/types');
const LimeCommand = require('../structs/command');

// List command class
class LimeCommandList extends LimeCommand {
  // Constructor
  constructor(lime) {
    // Super from command class
    super(lime, require('../../lib/commands/list.json'));

    // Operations
    this.operations.set(1, (prop) => {
      if (!this.lime.hasOwnProperty(prop) || Types.isFunction(this.lime[prop])) {
        throw new Error('error:invalidListProperty');
      }
      const res = this.lime[prop];
      return Types.isClass(Map, res) ? Object.fromEntries(res) : res;
    });
  }
}

// Export
module.exports = LimeCommandList;
