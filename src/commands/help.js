// Require
const LimeCommand = require('../structs/command');

// Help command class
class LimeCommandHelp extends LimeCommand {
  // Constructor
  constructor(lime) {
    // Super from command class
    super(lime, require('../../lib/commands/help.json'));

    // Operations
    this.operations.set(0, () => {
      const res = ['Below is a list of available commands:'];
      this.lime.module.forEach((M) => {
        try {
          let v;
          try {
            v = new (M)(this.lime);
          } catch (e) {
            (() => 0)();
          }
          if (v instanceof LimeCommand) {
            res.push(`${v.name}: ${v.description}`);
          }
        } catch (e) {
          throw new Error('issue:invalidModuleInHelp');
        }
      });
      return res.join('\n');
    });
    this.operations.set(1, (prop) => {
      if (!this.lime.module.has(prop)) {
        throw new Error('error:invalidModuleProperty');
      }
      return `${prop}: ${this.lime.build(prop)().name}`;
    });
  }
}

// Export
module.exports = LimeCommandHelp;
