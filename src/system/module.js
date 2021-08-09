// Module map
const Module = new Map();

// Commands
Module.set('about', require('../commands/about'));
Module.set('help', require('../commands/help'));

// Expressions
Module.set('boolean', require('../expressions/boolean'));
Module.set('integer', require('../expressions/integer'));
Module.set('rational', require('../expressions/rational'));
Module.set('variable', require('../expressions/variable'));

// Arithmetic functions
Module.set('add', require('../functions/arithmetic/add'));
Module.set('decimal', require('../functions/arithmetic/decimal'));
Module.set('divide', require('../functions/arithmetic/divide'));
Module.set('exponent', require('../functions/arithmetic/exponent'));
Module.set('modulo', require('../functions/arithmetic/modulo'));
Module.set('multiply', require('../functions/arithmetic/multiply'));
Module.set('negative', require('../functions/arithmetic/negative'));
Module.set('positive', require('../functions/arithmetic/positive'));
Module.set('subtract', require('../functions/arithmetic/subtract'));

// Comparison functions
Module.set('equal', require('../functions/comparison/equal'));
Module.set('greater', require('../functions/comparison/greater'));
Module.set('greaterEqual', require('../functions/comparison/greaterEqual'));
Module.set('notEqual', require('../functions/comparison/notEqual'));
Module.set('smaller', require('../functions/comparison/smaller'));
Module.set('smallerEqual', require('../functions/comparison/smallerEqual'));

// Counting functions
Module.set('factorial', require('../functions/counting/factorial'));

// Structural functions
Module.set('assign', require('../functions/structural/assign'));
Module.set('commonBracket', require('../functions/structural/commonBracket'));

// Structures
Module.set('command', require('../structs/command'));
Module.set('equation', require('../structs/equation'));
Module.set('expression', require('../structs/expression'));
Module.set('function', require('../structs/function'));
Module.set('step', require('../structs/step'));
Module.set('token', require('../structs/token'));

/* ------------------------ division ------------------------ */

// Export
module.exports = Module;
