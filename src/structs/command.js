// Command class
class LimeCommand {
  // Constructor
  constructor(lime, { ...args }) {
    // Parent
    this.lime = lime;

    // Properties
    this.name = args.hasOwnProperty('name') ? args.name : this.constructor.name.slice(11);
    this.description = args.hasOwnProperty('description') ? args.description : '';
    this.operations = new Map();
  }

  /* ------------------------ division ------------------------ */

  // Execute function
  execute(input) {
    const params = input.split(/\s/).slice(1); const len = params.length;
    if (!this.operations.has(len)) {
      throw new Error('error:invalidParametersInCommand');
    }
    return this.operations.get(len)(...params);
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeCommand;
