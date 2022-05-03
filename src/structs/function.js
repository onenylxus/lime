// Require
const Types = require('../../utils/types');
const Oplist = require('../system/oplist');
const Order = require('../../lib/order.json');

// Function class
class LimeFunction {
  // Constructor
  constructor(lime, { ...args }) {
    // Parent
    this.lime = lime;

    // Properties
    this.mode = args.hasOwnProperty('mode') && ['l', 'r', 'b', 'n'].includes(args.mode) ? args.mode : 'x';
    this.name = args.hasOwnProperty('name') ? args.name : this.constructor.name.slice(12);
    this.operations = {};
    this.algorithms = new Map();
  }

  // Get order
  get order() {
    for (let i = 0; i < Order.length; i++) {
      if (Order[i].includes(this.name)) { return i; }
    }
    throw new Error('issue:invalidFunctionOrder');
  }

  // Evaluate function
  evaluate(step) {
    // Unmatched brackets error
    if (this.mode === 'x') {
      throw new Error('error:unmatchedBrackets');
    }

    const op = this.operations[this.mode];
    for (let i = 0; i < op.length; i++) {
      const { cond, act } = this.opfunc(op[i]);
      if ((cond)(step)) {
        (act)(step);
        if (op[i][0] !== 'c') { return step; }
      }
    }

    // Agreement error
    throw new Error('error:functionAgreement');
  }

  // Operation function
  opfunc(type) {
    if (!Types.isString(type)) {
      throw new Error('warn:invalidOperationFunction');
    }
    const mode = type[0]; const scope = type[1]; const args = type.substring(2);
    let cond; let act;

    // Oplist
    switch (mode) {
      case 'c': case 't':
        cond = Oplist.cond[Oplist.pair[type][0]];
        act = Oplist.act[Oplist.pair[type][1]];
        break;

      case 'e':
        cond = Oplist.cond[`${scope}${args}`];
        act = this.algorithms.get(`${scope}${args}`);
        break;

      default:
        throw new Error('error:invalidOperationFunction');
    }
    return { cond, act };
  }
}

// Export
module.exports = LimeFunction;
