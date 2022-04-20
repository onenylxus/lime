/* eslint-disable global-require */

// Require
const Compiler = require('./compiler');

/* ------------------------ division ------------------------ */

// Module map
const Module = new Map([].concat(
  // Commands
  Compiler.cmd([
    ['about', require('../commands/about')],
    ['clear', require('../commands/clear')],
    ['config', require('../commands/config')],
    ['help', require('../commands/help')],
    ['list', require('../commands/list')],
  ]),

  // Expressions
  Compiler.expr([
    ['argument', require('../expressions/argument')],
    ['boolean', require('../expressions/boolean')],
    ['complex', require('../expressions/complex')],
    ['integer', require('../expressions/integer')],
    ['matrix', require('../expressions/matrix')],
    ['rational', require('../expressions/rational')],
    ['set', require('../expressions/set')],
    ['string', require('../expressions/string')],
    ['symbol', require('../expressions/symbol')],
    ['variable', require('../expressions/variable')],
  ]),

  // Arithmetic functions
  Compiler.func([
    ['add', require('../functions/arithmetic/add')],
    ['decimal', require('../functions/arithmetic/decimal')],
    ['divide', require('../functions/arithmetic/divide')],
    ['exponent', require('../functions/arithmetic/exponent')],
    ['modulo', require('../functions/arithmetic/modulo')],
    ['multiply', require('../functions/arithmetic/multiply')],
    ['negative', require('../functions/arithmetic/negative')],
    ['positive', require('../functions/arithmetic/positive')],
    ['scalarAdd', require('../functions/arithmetic/scalarAdd')],
    ['scalarDivide', require('../functions/arithmetic/scalarDivide')],
    ['scalarExponent', require('../functions/arithmetic/scalarExponent')],
    ['scalarModulo', require('../functions/arithmetic/scalarModulo')],
    ['scalarMultiply', require('../functions/arithmetic/scalarMultiply')],
    ['scalarSubtract', require('../functions/arithmetic/scalarSubtract')],
    ['subtract', require('../functions/arithmetic/subtract')],
  ]),

  // Bitwise functions
  Compiler.func([
    ['bitwiseAnd', require('../functions/bitwise/bitwiseAnd')],
    ['bitwiseNot', require('../functions/bitwise/bitwiseNot')],
    ['bitwiseOr', require('../functions/bitwise/bitwiseOr')],
    ['shiftLeft', require('../functions/bitwise/shiftLeft')],
    ['shiftRight', require('../functions/bitwise/shiftRight')],
  ]),

  // Comparison functions
  Compiler.func([
    ['equal', require('../functions/comparison/equal')],
    ['greater', require('../functions/comparison/greater')],
    ['greaterEqual', require('../functions/comparison/greaterEqual')],
    ['notEqual', require('../functions/comparison/notEqual')],
    ['smaller', require('../functions/comparison/smaller')],
    ['smallerEqual', require('../functions/comparison/smallerEqual')],
  ]),

  // Complex functions
  Compiler.func([
    ['conjugate', require('../functions/complex/conjugate')],
    ['imaginary', require('../functions/complex/imaginary')],
    ['real', require('../functions/complex/real')],
  ]),

  // Conversion functions
  Compiler.func([
    ['toBoolean', require('../functions/conversion/toBoolean')],
    ['toComplex', require('../functions/conversion/toComplex')],
    ['toInteger', require('../functions/conversion/toInteger')],
    ['toMatrix', require('../functions/conversion/toMatrix')],
    ['toRational', require('../functions/conversion/toRational')],
    ['toSet', require('../functions/conversion/toSet')],
    ['toString', require('../functions/conversion/toString')],
  ]),

  // Counting functions
  Compiler.func([
    ['combination', require('../functions/counting/combination')],
    ['factorial', require('../functions/counting/factorial')],
    ['permutation', require('../functions/counting/permutation')],
  ]),

  // Logical functions
  Compiler.func([
    ['logicalAnd', require('../functions/logical/logicalAnd')],
    ['logicalNot', require('../functions/logical/logicalNot')],
    ['logicalOr', require('../functions/logical/logicalOr')],
  ]),

  // Matrix functions
  Compiler.func([
    ['adjoint', require('../functions/matrix/adjoint')],
    ['cofactor', require('../functions/matrix/cofactor')],
    ['determinant', require('../functions/matrix/determinant')],
    ['hilbertMatrix', require('../functions/matrix/hilbertMatrix')],
    ['identityMatrix', require('../functions/matrix/identityMatrix')],
    ['index', require('../functions/matrix/index')],
    ['inverse', require('../functions/matrix/inverse')],
    ['magicMatrix', require('../functions/matrix/magicMatrix')],
    ['minor', require('../functions/matrix/minor')],
    ['oneMatrix', require('../functions/matrix/oneMatrix')],
    ['reducedRowEchelonForm', require('../functions/matrix/reducedRowEchelonForm')],
    ['reshape', require('../functions/matrix/reshape')],
    ['trace', require('../functions/matrix/trace')],
    ['transpose', require('../functions/matrix/transpose')],
    ['zeroMatrix', require('../functions/matrix/zeroMatrix')],
  ]),

  // Numeric functions
  Compiler.func([
    ['absolute', require('../functions/numeric/absolute')],
    ['ceiling', require('../functions/numeric/ceiling')],
    ['factor', require('../functions/numeric/factor')],
    ['fibonacci', require('../functions/numeric/fibonacci')],
    ['floor', require('../functions/numeric/floor')],
    ['greatestCommonDivisor', require('../functions/numeric/greatestCommonDivisor')],
    ['leastCommonMultiple', require('../functions/numeric/leastCommonMultiple')],
    ['prime', require('../functions/numeric/prime')],
    ['reciprocal', require('../functions/numeric/reciprocal')],
    ['round', require('../functions/numeric/round')],
    ['sign', require('../functions/numeric/sign')],
    ['truncation', require('../functions/numeric/truncation')],
  ]),

  // Set functions
  Compiler.func([
    ['difference', require('../functions/set/difference')],
    ['intersection', require('../functions/set/intersection')],
    ['powerset', require('../functions/set/powerset')],
    ['subset', require('../functions/set/subset')],
    ['symmetricDifference', require('../functions/set/symmetricDifference')],
    ['union', require('../functions/set/union')],
  ]),

  // Statistical functions
  Compiler.func([
    ['maximum', require('../functions/statistical/maximum')],
    ['mean', require('../functions/statistical/mean')],
    ['minimum', require('../functions/statistical/minimum')],
    ['product', require('../functions/statistical/product')],
    ['random', require('../functions/statistical/random')],
    ['range', require('../functions/statistical/range')],
    ['sum', require('../functions/statistical/sum')],
  ]),

  // String functions
  Compiler.func([
    ['concatenate', require('../functions/string/concatenate')],
    ['length', require('../functions/string/length')],
  ]),

  // Structural functions
  Compiler.func([
    ['assign', require('../functions/structural/assign')],
    ['columnSplit', require('../functions/structural/columnSplit')],
    ['commonBracket', require('../functions/structural/commonBracket')],
    ['matrixBracket', require('../functions/structural/matrixBracket')],
    ['property', require('../functions/structural/property')],
    ['omitted', require('../functions/structural/omitted')],
    ['rowSplit', require('../functions/structural/rowSplit')],
    ['setBracket', require('../functions/structural/setBracket')],
  ]),

  // System functions
  Compiler.func([
    ['memory', require('../functions/system/memory')],
    ['type', require('../functions/system/type')],
  ]),

  // Structures
  Compiler.strc([
    ['command', require('../structs/command')],
    ['equation', require('../structs/equation')],
    ['expression', require('../structs/expression')],
    ['function', require('../structs/function')],
    ['step', require('../structs/step')],
    ['token', require('../structs/token')],
  ]),
));

/* ------------------------ division ------------------------ */

// Export
module.exports = Module;

