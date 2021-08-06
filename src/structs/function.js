// Include
const Oplist = require('../system/oplist');
const Order = require('../../lib/order.json');
const Types = require('../../utils/types');

/* ------------------------ division ------------------------ */

// Function class
class LimeFunction {
  // Constructor
  constructor(lime, { ...args }) {
    // Parent
    this.lime = lime;

    // Properties
    this.mode = args.hasOwnProperty('mode') && ['l', 'r', 'b', 'n'].includes(args.mode) ? args.mode : 'x';
    this.name = args.hasOwnProperty('name') ? args.name : this.constructor.name.slice(4);
    this.operations = { l: [], r: [], b: [], n: [] };
    this.algorithms = new Map();
  }

  /* ------------------------ division ------------------------ */

  // Get order
  get order() {
    for (let i = 0; i < Order.length; i++) {
      if (Order[i].includes(this.name)) { return i; }
    }
    throw new Error('issue:invalidFunctionOrder');
  }

  /* ------------------------ division ------------------------ */

  // Evaluate function
  evaluate(step) {
    // Unmatched brackets error
    if (this.mode === 'x') {
      throw new Error('error:unmatchedBrackets');
    }

    const op = this.operations[this.mode];
    for (let i = 0; i < op.length; i++) {
      // Fetch operation pairs
      let cond, act;
      if (Types.isString(op[i])) {
        cond = op[i][0] === 'e' ? Oplist.cond[op[i].substring(1)] : Oplist.cond[Oplist.pair[op[i]][0]];
        act = op[i][0] === 'e' ? this.algorithms.get(op[i].substring(1)) : Oplist.act[Oplist.pair[op[i]][1]];
      }

      // Execute action under condition
      if ((cond)(step)) {
        (act)(step);
        return step;
      }
    }

    // Agreement error
    throw new Error('error:functionAgreement');
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = LimeFunction;
