# Changelog

### v0.4.0 (dev)
- Converted `Compiler` from object to class
- Added expressions: `Symbol`
- Added functions:
  - Conversion: `ToBoolean`, `ToComplex`, `ToInteger`, `ToMatrix`, `ToRational`, `ToSet`, `ToString`, `ToSymbol`
  - Counting: `Iterator`
- Moved command and expression information to library as JSON files
- Fixed existing functions to support variables

### v0.3.3 (Feb 5, 2022)
- Extended `Equal` function to all expression types
- Added functions:
  - Matrix: `Reshape`
  - Set: `Difference`, `Powerset`, `Subset`, `SymmetricDifference`
- Modified existing functions to support new expression types
- Replaced with tester function to generalize unit tests

### v0.3.2 (Jan 17, 2022)
- Set up generic compiler to generalize classes
- Simplified step evaluation process
- Redefined empty arguments, matrices and sets
- Added expressions: `Set`
- Added functions:
  - Numeric: `Factor`
  - Set: `Intersection`, `Union`
  - Structural: `SetBracket`
- Shrunk package size

### v0.3.1 (Nov 22, 2021)
- Set up simple user interface in web
- Added functions:
  - Matrix: `HilbertMatrix`, `MagicMatrix`
  - Structural: `Property`
  - System: `Memory`, `Type`
- Modified some messages from error to warn type
- Added result display in decimal
- Added error tests for commands, expressions and functions

### v0.3.0 (Nov 8, 2021)
- Isolated type identifier to another package
- Added expressions: `String`
- Added functions:
  - Arithmetic: `ScalarExponent`, `ScalarModulo`
  - Matrix: `Adjoint`, `Cofactor`, `Inverse`
  - String: `Concatenate`, `Length`
- Modified existing functions to support new expression types
- Modified test script format

### v0.2.2 (Sep 25, 2021)
- Added expressions: `Matrix`
- Added functions:
  - Arithmetic: `ScalarAdd`, `ScalarDivide`, `ScalarMultiply`, `ScalarSubtract`
  - Matrix: `Determinant`, `IdentityMatrix`, `Index`, `Minor`, `OneMatrix`, `Trace`, `Transpose`, `ZeroMatrix`
  - Structural: `MatrixBracket`, `RowSplit`
- Modified existing functions to support new expression types

### v0.2.1 (Aug 31, 2021)
- Set up store system to prevent repeated calculation
- Added expressions: `Complex`
- Added functions:
  - Complex: `Conjugate`, `Imaginary`, `Real`
- Modified existing functions to support new expression types

### v0.2.0 (Aug 26, 2021)
- Added expressions: `Argument`
- Added functions:
  - Counting: `Combination`, `Permutation`
  - Numeric: `Absolute`, `Ceiling`, `Fibonacci`, `Floor`, `GreatestCommonDivisor`, `LeastCommonMultiple`, `Prime`, `Reciprocal`, `Round`, `Sign`, `Truncation`
  - Statistical: `Maximum`, `Mean`, `Minimum`, `Product`, `Random`, `Range`, `Sum`
  - Structural: `ColumnSplit`, `Omitted`
- Improved rational simplify process
- Modified existing functions to support new expression types

### v0.1.2 (Aug 16, 2021)
- Set up prompt and evaluate modes for input
- Added commands: `Clear`, `Config`, `List`
- Modified existing function to support boolean and non-boolean conversions
- Set up crosstesting system and standardized process-based tests

### v0.1.1 (Aug 10, 2021)
- Set up command system in prompt
- Added commands: `About`, `Help`
- Added expressions: `Boolean`, `Variable`
- Added functions:
  - Arithmetic: `Decimal`, `Exponent`, `Modulo`, `Positive`, `Negative`
  - Bitwise: `BitwiseAnd`, `BitwiseNot`, `BitwiseOr`, `ShiftLeft`, `ShiftRight`
  - Comparison: `Equal`, `Greater`, `GreaterEqual`, `NotEqual`, `Smaller`, `SmallerEqual`
  - Counting: `Factorial`
  - Logical: `LogicalAnd`, `LogicalNot`, `LogicalOr`
  - Structural: `Assign`
- Modified existing functions to support new expression types
- Improved engine independence of expression and function tests
- Added tests: `Commands`
- Removed tests: `Banner`

### v0.1.0 (Aug 6, 2021)
- Set up engine framework, bundling system using Rollup and testing system using Jest
- Set up prompt and web examples
- Added expressions: `Integer`, `Rational`
- Added functions:
  - Arithmetic: `Add`, `Divide`, `Multiply`, `Subtract`
  - Structural: `CommonBracket`
- Added tests: `Banner`, `Bundle`, `Error`, `Expressions`, `Functions`, `Module`, `Types`
