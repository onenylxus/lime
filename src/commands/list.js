// Require
const Types = require('../../utils/types');
const LimeCommand = require('../structs/command');

/* ------------------------ division ------------------------ */

// List command class
class LimeCommandList extends LimeCommand {
  // Constructor
  constructor(lime) {
    // Super from command class
    super(lime, { name: 'list', description: 'list specified engine property' });

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

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeCommandList;
