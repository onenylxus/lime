// Require
const LimeCommand = require('../structs/command');

/* ------------------------ division ------------------------ */

// Config command class
class LimeCommandConfig extends LimeCommand {
  // Constructor
  constructor(lime) {
    // Super from command class
    super(lime, { name: 'config', description: 'view and modify engine configurations' });

    // Operations
    this.operations.set(1, (prop) => {
      if (!this.lime.config.hasOwnProperty(prop)) {
        throw new Error('error:invalidConfigProperty');
      }
      return `${prop}: ${this.lime.config[prop]}`;
    });
    this.operations.set(2, (prop, value) => {
      if (!this.lime.config.hasOwnProperty(prop)) {
        throw new Error('error:invalidConfigProperty');
      }
      const t = this.lime.config[prop];
      this.lime.config[prop] = this.lime.direct([value]).value;
      return `${prop}: ${t} > ${this.lime.config[prop]}`;
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeCommandConfig;
