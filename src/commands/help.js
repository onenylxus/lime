// Require
const LimeCommand = require('../structs/command');

/* ------------------------ division ------------------------ */

// Help command class
class LimeCommandHelp extends LimeCommand {
  // Constructor
  constructor(lime) {
    // Super from command class
    super(lime, { name: 'help', description: 'list all available commands' });

    // Operations
    this.operations.set(0, () => {
      const res = ['Below is a list of available commands:'];
      this.lime.module.forEach((m) => {
        try {
          const v = new (m)(this.lime);
          if (v instanceof LimeCommand) {
            res.push(`${v.name}: ${v.description}`);
          }
        } catch (e) {
          (() => 0)();
        }
      });
      return res.join('\n');
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeCommandHelp;
