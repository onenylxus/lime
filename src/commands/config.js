// Require
const LimeCommand = require('../structs/command');

// Config command class
class LimeCommandConfig extends LimeCommand {
  // Constructor
  constructor(lime) {
    // Super from command class
    super(lime, require('../../lib/commands/config.json'));

    // Operations
    this.operations.set(1, (prop) => {
      if (!this.lime.config.has(prop)) {
        throw new Error('error:invalidConfigProperty');
      }
      return `${prop}: ${this.lime.config.get(prop)}`;
    });
    this.operations.set(2, (prop, value) => {
      if (!this.lime.config.has(prop)) {
        throw new Error('error:invalidConfigProperty');
      }
      const t = this.lime.config.get(prop);
      this.lime.config.set(prop, this.lime.direct([value.match(/^[-+]?\d+$/) ? +value : value]).value);
      return `${prop}: ${t} > ${this.lime.config.get(prop)}`;
    });
  }
}

// Export
module.exports = LimeCommandConfig;
