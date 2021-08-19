# Changelog

### v0.2.0 (dev)
- Added expressions: `Argument`
- Added functions:
  - Counting: `Combination`, `Permutation`
  - Numeric: `Ceiling`, `Fibonacci`, `Floor`, `greatestCommonDivisor`, `LeastCommonMultiple`, `Prime`, `Reciprocal`, `Round`, `Truncation`
  - Statistical: `Maximum`, `Mean`, `Minimum`, `Product`, `Random`, `Range`, `Sum`
  - Structural: `ColumnSplit`, `Omitted`
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
