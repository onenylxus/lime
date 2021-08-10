# Changelog

### v0.1.1
- Set up command system in prompt
- Added commands: `About`, `Help`
- Added expressions: `Boolean`, `Variable`
- Added functions:
  - Arithmetic: `Decimal`, `Exponent`, `Modulo`, `Positive`, `Negative`
  - Bitwise: `BitwiseAnd`, `BitwiseNot`, `BitwiseOr`, `ShiftLeft`, `ShiftRight`
  - Comparison: `Equal`, `Greater`, `GreaterEqual`, `NotEqual`, `Smaller`, `SmallerEqual`
  - Counting: `Factorial`
  - Logical: `LogicalAnd`, `LogicalNot`, `LogicalOr`
- Modified existing functions to support new expression types
- Improved engine independence of expression and function tests
- Added tests: `Commands`
- Removed tests: `Banner`
### v0.1.0
- Set up engine framework, bundling system using Rollup and testing system using Jest
- Set up prompt and web examples
- Added expressions: `Integer`, `Rational`
- Added functions:
  - Arithmetic: `Add`, `Divide`, `Multiply`, `Subtract`
  - Structural: `CommonBracket`
- Added tests: `Banner`, `Bundle`, `Error`, `Expressions`, `Functions`, `Module`, `Types`
