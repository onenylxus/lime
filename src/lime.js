// Require
const Types = require('../utils/types');
const Module = require('./system/module');
const Config = require('./config.json');
const Message = require('../lib/system/message.json');
const Refer = require('../lib/system/refer.json');

// Lime class
class Lime {
  // Constructor
  constructor(conf) {
    // Properties
    this.config = new Map(Object.entries({ ...Config, ...conf }));
    this.module = Module;
    this.variables = new Map();
    this.memory = [];
    this.store = {};
  }

  // Get answer
  get answer() {
    return this.variables.get('ans').print();
  }

  // Prompt function
  prompt(input) {
    try {
      return this.run(input);
    } catch (err) {
      return this.message(err);
    }
  }

  // Evaluate function
  evaluate(input) {
    try {
      return this.run(input);
    } catch (err) {
      if (!this.config.get('testMode')) {
        console.log(this.message(err));
      }
      return '';
    }
  }

  // Run function
  run(input) {
    // Check input validity
    if (!Types.isString(input)) {
      throw new Error('error:inputNotStringInPrompt');
    }
    if (input.length === 0) {
      throw new Error('error:inputEmptyInPrompt');
    }

    // Set default answer variable if not exist
    if (!this.variables.has('ans')) {
      this.variables.set('ans', this.direct([0]));
    }

    // Build equation
    const eq = this.build('equation')(input);
    this.lex(eq);

    // Run command
    if (this.identify('command')(eq.result[0])) {
      return eq.result[0].execute(input);
    }

    // Finalize
    this.memory.push(eq);
    if (this.config.get('promptShowRuntime')) {
      console.log(`Equation runtime: ${eq.runtime / 1000}s`);
    }
    this.variables.set('ans', eq.result[0]);
    return this.answer;
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
      if (this.config.get('testMode')) {
        return this.message(err);
      }

      console.log(this.message(err));
      return undefined;
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
    if (this.config.get('developmentMode') && symbol === 'i') {
      console.log(err);
    }

    // Return message
    return `[${symbol}] ${status[1]}\n${Message[err.message]} ${symbol === 'i' ? `\n${Message.github}` : ''}`;
  }

  // Lex function
  lex(eq) {
    const step = eq.input; const res = [];
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
    const tokens = eq.solution.shift(); const res = [];
    let sBool = false; let t = '';
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
          // String
          if (tokens[i].value === '"') {
            sBool = true; t = '';
          }

          // Referred key
          else if (Refer.hasOwnProperty(tokens[i].value)) {
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

      while (i + 1 < tokens.length && sBool) {
        if (tokens[i + 1].value === '"') {
          res.push(this.build('string')(t));
          sBool = false; i++;
        } else {
          t += `${tokens[++i].type === 'whitespace' ? ' ' : tokens[i].value}`;
        }
      }
    }

    // Proceed to next step
    if (sBool) { throw new Error('error:unmatchedBrackets'); }
    eq.record(this.build('step')(res));
    if (!this.identify('command')(eq.result[0])) {
      this.process(eq);
    }
  }

  // Process function
  process(eq) {
    const bool = true;
    while (bool) {
      for (let i = 0; i < eq.result.length; i++) {
        // Insert omitted function
        if (i > 0 && this.identify('expression')(eq.result[i - 1], eq.result[i])) {
          eq.result.splice(i, 0, this.build('omitted')('b'));
        }
      }

      // Search function by order
      let pos = -1;
      for (let j = 0; j < eq.result.length; j++) {
        if (this.identify('function')(eq.result[j])) {
          pos = pos < 0 ? j : (eq.result[j].order > eq.result[pos].order ? j : pos);
        }
      }

      // Execute function process
      if (pos < 0) { break; }
      const step = this.build('step')(eq.result, pos);
      eq.record(eq.result[pos].evaluate(step));
    }

    // Finalize result
    if (eq.result.length === 1 && (!this.identify('argument')(eq.result[0]) || eq.result[0].length === 1)) {
      eq.record(this.build('step')([eq.result[0].finalize()]));
    } else {
      throw new Error('issue:invalidResultLengthInProcess');
    }
  }

  // Identify function
  identify(...mods) {
    // Find module
    if (mods.every((m) => this.module.has(m))) {
      return (...args) => args.every((v) => mods.some((m) => Types.isClass(this.module.get(m), v)));
    }

    // Invalid module
    throw new Error('issue:invalidModuleInIdentify');
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

// Export
module.exports = (conf) => new Lime(conf);
