// Module map
const Module = new Map();

// Expressions
Module.set('integer', require('../expressions/integer'));
Module.set('rational', require('../expressions/rational'));

// Arithmetic functions
Module.set('add', require('../functions/arithmetic/add'));
Module.set('divide', require('../functions/arithmetic/divide'));
Module.set('multiply', require('../functions/arithmetic/multiply'));
Module.set('subtract', require('../functions/arithmetic/subtract'));

// Structures
Module.set('equation', require('../structs/equation'));
Module.set('expression', require('../structs/expression'));
Module.set('function', require('../structs/function'));
Module.set('step', require('../structs/step'));
Module.set('token', require('../structs/token'));

/* ------------------------ division ------------------------ */

// Export
module.exports = Module;
