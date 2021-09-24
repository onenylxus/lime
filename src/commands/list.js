// Require
const { Types } = require('@onenylxus/helpers');
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
      if (
        !this.lime.hasOwnProperty(prop)
        || Types.isFunction(this.lime[prop])
      ) {
        throw new Error('error:invalidListProperty');
      }
      return Types.isClass(Map, this.lime[prop])
        ? Object.fromEntries(this.lime[prop])
        : this.lime[prop];
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeCommandList;
