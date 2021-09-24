// Module map
const Module = new Map();

// Commands
Module.set('about', require('../commands/about'));
Module.set('clear', require('../commands/clear'));
Module.set('config', require('../commands/config'));
Module.set('help', require('../commands/help'));
Module.set('list', require('../commands/list'));

// Expressions
Module.set('argument', require('../expressions/argument'));
Module.set('boolean', require('../expressions/boolean'));
Module.set('complex', require('../expressions/complex'));
Module.set('integer', require('../expressions/integer'));
Module.set('matrix', require('../expressions/matrix'));
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
Module.set('scalarAdd', require('../functions/arithmetic/scalarAdd'));
Module.set('scalarDivide', require('../functions/arithmetic/scalarDivide'));
Module.set('scalarMultiply', require('../functions/arithmetic/scalarMultiply'));
Module.set('scalarSubtract', require('../functions/arithmetic/scalarSubtract'));
Module.set('subtract', require('../functions/arithmetic/subtract'));

// Bitwise functions
Module.set('bitwiseAnd', require('../functions/bitwise/bitwiseAnd'));
Module.set('bitwiseNot', require('../functions/bitwise/bitwiseNot'));
Module.set('bitwiseOr', require('../functions/bitwise/bitwiseOr'));
Module.set('shiftLeft', require('../functions/bitwise/shiftLeft'));
Module.set('shiftRight', require('../functions/bitwise/shiftRight'));

// Comparison functions
Module.set('equal', require('../functions/comparison/equal'));
Module.set('greater', require('../functions/comparison/greater'));
Module.set('greaterEqual', require('../functions/comparison/greaterEqual'));
Module.set('notEqual', require('../functions/comparison/notEqual'));
Module.set('smaller', require('../functions/comparison/smaller'));
Module.set('smallerEqual', require('../functions/comparison/smallerEqual'));

// Complex functions
Module.set('conjugate', require('../functions/complex/conjugate'));
Module.set('imaginary', require('../functions/complex/imaginary'));
Module.set('real', require('../functions/complex/real'));

// Counting functions
Module.set('combination', require('../functions/counting/combination'));
Module.set('factorial', require('../functions/counting/factorial'));
Module.set('permutation', require('../functions/counting/permutation'));

// Logical functions
Module.set('logicalAnd', require('../functions/logical/logicalAnd'));
Module.set('logicalNot', require('../functions/logical/logicalNot'));
Module.set('logicalOr', require('../functions/logical/logicalOr'));

// Matrix functions
Module.set('determinant', require('../functions/matrix/determinant'));
Module.set('identityMatrix', require('../functions/matrix/identityMatrix'));
Module.set('index', require('../functions/matrix/index'));
Module.set('minor', require('../functions/matrix/minor'));
Module.set('oneMatrix', require('../functions/matrix/oneMatrix'));
Module.set('reducedRowEchelonForm', require('../functions/matrix/reducedRowEchelonForm'));
Module.set('trace', require('../functions/matrix/trace'));
Module.set('transpose', require('../functions/matrix/transpose'));
Module.set('zeroMatrix', require('../functions/matrix/zeroMatrix'));

// Numeric functions
Module.set('absolute', require('../functions/numeric/absolute'));
Module.set('ceiling', require('../functions/numeric/ceiling'));
Module.set('fibonacci', require('../functions/numeric/fibonacci'));
Module.set('floor', require('../functions/numeric/floor'));
Module.set('greatestCommonDivisor', require('../functions/numeric/greatestCommonDivisor'));
Module.set('leastCommonMultiple', require('../functions/numeric/leastCommonMultiple'));
Module.set('prime', require('../functions/numeric/prime'));
Module.set('reciprocal', require('../functions/numeric/reciprocal'));
Module.set('round', require('../functions/numeric/round'));
Module.set('sign', require('../functions/numeric/sign'));
Module.set('truncation', require('../functions/numeric/truncation'));

// Statistical functions
Module.set('maximum', require('../functions/statistical/maximum'));
Module.set('mean', require('../functions/statistical/mean'));
Module.set('minimum', require('../functions/statistical/minimum'));
Module.set('product', require('../functions/statistical/product'));
Module.set('random', require('../functions/statistical/random'));
Module.set('range', require('../functions/statistical/range'));
Module.set('sum', require('../functions/statistical/sum'));

// Structural functions
Module.set('assign', require('../functions/structural/assign'));
Module.set('columnSplit', require('../functions/structural/columnSplit'));
Module.set('commonBracket', require('../functions/structural/commonBracket'));
Module.set('matrixBracket', require('../functions/structural/matrixBracket'));
Module.set('omitted', require('../functions/structural/omitted'));
Module.set('rowSplit', require('../functions/structural/rowSplit'));

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
