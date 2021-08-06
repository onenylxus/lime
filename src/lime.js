// Require
const Message = require('../lib/message.json');
const Refer = require('../lib/refer.json');
const Types = require('../utils/types');

/* ------------------------ division ------------------------ */

// Lime class
class Lime {
  // Constructor
  constructor(conf) {
    // Properties
    this.config = { ...require('./config.json'), ...conf };
    this.module = require('./system/module');
    this.variables = { ans: undefined };
    this.memory = [];
  }

  /* ------------------------ division ------------------------ */

  // Get answer
  get answer() {
    return this.variables.ans.print();
  }

  /* ------------------------ division ------------------------ */

  // Prompt function
  prompt(input) {
    try {
      // Check input validity
      if (!Types.isString(input)) {
        throw new Error('error:inputNotStringInPrompt');
      }
      if (input.length === 0) {
        throw new Error('error:inputEmptyInPrompt');
      }

      // Build equation
      const eq = this.build('equation')(input);
      this.lex(eq);

      // Finalize
      this.memory.push(eq);
      [this.variables.ans] = eq.result;
      return this.answer;
    } catch (err) {
      return this.message(err);
    }
  }

  // Direct process function
  direct(input) {
    try {
      // Check input validity
      if (!Types.isArray(input)) {
        throw new Error('error:inputNotArrayInDirect');
      }
      if (input.length === 0) {
        throw new Error('error:inputEmptyInDirect');
      }

      // Build equation
      const eq = this.build('equation')(input);
      eq.record(this.build('step')(eq.input.map((v) => {
        if ((Types.isString(v) || Types.isNumber(v)) && !Types.isUndefined(this.refer(v))) {
          return this.refer(v);
        }
        return v;
      })));

      // Finalize
      this.process(eq);
      return eq.result[0];
    } catch (err) {
      return this.message(err);
    }
  }

  // Message function
  message(err) {
    // Require message JSON file
    const ue = new Error('issue:invalidMessage');

    // Invalid message type
    if (!Message.hasOwnProperty(err.message) || !err.message.includes(':')) {
      console.log(err);
      return this.message(ue);
    }

    // Get equation status and symbol
    const status = err.message.split(':'); let symbol;
    switch (status[0]) {
      case 'error': symbol = '!'; break;
      case 'warn': symbol = '?'; break;
      case 'issue': symbol = 'i'; break;
      default: return this.message(ue);
    }
    if (this.config.developmentMode && symbol === 'i') {
      console.log(err);
    }

    // Return message
    return `[${symbol}] ${status[1]}\n${Message[err.message]} ${symbol === 'i' ? `\n${Message.github}` : ''}`;
  }

  /* ------------------------ division ------------------------ */

  // Lex function
  lex(eq) {
    const step = eq.input, res = [];
    for (let i = 0; i < step.length; i++) {
      const ch = step[i]; let key = ch;

      // Whitespace
      if (ch.match(/\s/)) {
        res.push(this.build('token')('whitespace'));
      }

      // Integer
      else if (ch.match(/\d/)) {
        while (i + 1 < step.length) {
          if (!step[i + 1].match(/\d/)) { break; }
          key += step[++i];
        }
        res.push(this.build('token')('integer', key));
      }

      // Variable
      else if (ch.match(/\w/)) {
        while (i + 1 < step.length) {
          if (!step[i + 1].match(/\w/)) { break; }
          key += step[++i];
        }
        res.push(this.build('token')('variable', key));
      }

      // Symbol
      else {
        res.push(this.build('token')('symbol', key));
      }
    }

    // Proceed to next step
    eq.record(res);
    this.parse(eq);
  }

  // Parse function
  parse(eq) {
    // Convert tokens to blocks
    const tokens = eq.solution.shift(), res = [];
    for (let i = 0; i < tokens.length; i++) {
      switch (tokens[i].type) {
        // Whitespace
        case 'whitespace':
          break;

        // Integer
        case 'integer':
          res.push(this.build('integer')(tokens[i].value));
          break;

        // Symbol and variable
        case 'symbol': case 'variable':
          // Referred key
          if (Refer.hasOwnProperty(tokens[i].value)) {
            res.push(this.refer(tokens[i].value));
          }

          // Variable
          else if (tokens[i].type === 'variable') {
            res.push(this.build('variable')(tokens[i].value));
          }

          // Invalid symbol
          else {
            throw new Error('error:invalidSymbol');
          }
          break;

        // Invalid token
        default:
          throw new Error('issue:invalidTokenInParse');
      }
    }

    // Proceed to next step
    eq.record(this.build('step')(res));
    this.process(eq);
  }

  // Process function
  process(eq) {
    const bool = true;
    while (bool) {
      // Search function by order
      let pos = -1;
      for (let i = 0; i < eq.result.length; i++) {
        if (this.identify('function')(eq.result[i])) {
          pos = pos < 0 ? i : (eq.result[i].order > eq.result[pos].order ? i : pos);
        }
      }

      // Execute function process
      if (pos < 0) { break; }
      const step = this.build('step')(eq.result, pos);
      eq.record(eq.result[pos].evaluate(step));
    }
  }

  /* ------------------------ division ------------------------ */

  // Identify function
  identify(...mods) {
    return (...args) => args.every((v) => mods.some((m) => Types.isClass(this.module.get(m), v)));
  }

  // Build function
  build(mod) {
    // Find module
    if (this.module.has(mod)) {
      return (...args) => new (this.module.get(mod))(this, ...args);
    }

    // Invalid module
    throw new Error('issue:invalidModuleInBuild');
  }

  // Refer function
  refer(key) {
    // Number
    if (Types.isNumber(key)) {
      return this.build('integer')(key);
    }

    // Referred block
    if (Refer.hasOwnProperty(key)) {
      return this.build(Refer[key][0])(
        ...Refer[key].slice(1).map((v) => (Types.isArray(v) ? this.build(v[0])(...v.slice(1)) : v)),
      );
    }

    // Unknown key
    return undefined;
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = (conf) => new Lime(conf);
