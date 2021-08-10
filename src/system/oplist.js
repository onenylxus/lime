// Operation list
const Oplist = {
  // Conditions
  cond: {
    // [Binary] Boolean, Boolean
    'b(bool,bool)': (step) => step.bpi('boolean'),

    // [Binary] Integer, Integer
    'b(int,int)': (step) => step.bpi('integer'),

    // [Binary] Integer, Rational
    'b(int,rat)': (step) => step.lpi('integer') && step.rpi('rational'),

    // [Binary] Rational, Integer
    'b(rat,int)': (step) => step.lpi('rational') && step.rpi('integer'),

    // [Binary] Rational, Rational
    'b(rat,rat)': (step) => step.bpi('rational'),

    // [Binary] Variable, Expression
    'b(var,exp)': (step) => step.lpi('variable') && step.rpi('expression'),

    // [Left unary] Integer
    'l(int)': (step) => step.lpi('integer'),

    // [Left unary] Variable
    'l(var)': (step) => step.lpi('variable'),

    // Nested
    'n()': () => true,

    // [Right unary] Boolean
    'r(bool)': (step) => step.rpi('boolean'),

    // [Right unary] Integer
    'r(int)': (step) => step.rpi('integer'),

    // [Right unary] Rational
    'r(rat)': (step) => step.rpi('rational'),

    // [Right unary] Variable
    'r(var)': (step) => step.rpi('variable'),

    // [Right unary] Add
    'r(+)': (step) => step.rpi('add'),

    // [Right unary] Assign
    'r(=)': (step) => step.rpi('assign'),

    // [Right unary] Bitwise AND
    'r(&)': (step) => step.rpi('bitwiseAnd'),

    // [Right unary] Bitwise OR
    'r(|)': (step) => step.rpi('bitwiseOr'),

    // [Right unary] Factorial
    'r(!)': (step) => step.rpi('factorial'),

    // [Right unary] Greater
    'r(>)': (step) => step.rpi('greater'),

    // [Right unary] Negative
    'r(_-)': (step) => step.rpi('negative'),

    // [Right unary] Positive
    'r(_+)': (step) => step.rpi('positive'),

    // [Right unary] Smaller
    'r(<)': (step) => step.rpi('smaller'),

    // [Right unary] Subtract
    'r(-)': (step) => step.rpi('subtract'),

    // Zero position
    'z()': (step) => step.pos === 0,
  },

  // Actions
  act: {
    // Transfer function to equal
    'f(==)': (step) => {
      step.rus(step.lime.refer('=='));
    },

    // Transfer function to factorial and equal
    'f(!==)': (step) => {
      step.rus(step.lime.refer('!'), step.lime.refer('=='));
    },

    // Transfer function to greater equal
    'f(>=)': (step) => {
      step.rus(step.lime.refer('>='));
    },

    // Transfer function to logical AND
    'f(&&)': (step) => {
      step.rus(step.lime.refer('&&'));
    },

    // Transfer function to logical NOT
    'f(_!)': (step) => {
      step.fs(step.lime.refer('_!'));
    },

    // Transfer function to logical OR
    'f(||)': (step) => {
      step.rus(step.lime.refer('||'));
    },

    // Transfer function to negative
    'f(_-)': (step) => {
      step.fs(step.lime.refer('_-'));
    },

    // Transfer function to not equal
    'f(!=)': (step) => {
      step.rus(step.lime.refer('!='));
    },

    // Transfer function to positive
    'f(_+)': (step) => {
      step.fs(step.lime.refer('_+'));
    },

    // Transfer function to shift left
    'f(<<)': (step) => {
      step.rus(step.lime.refer('<<'));
    },

    // Transfer function to shift right
    'f(>>)': (step) => {
      step.rus(step.lime.refer('>>'));
    },

    // Transfer function to smaller equal
    'f(<=)': (step) => {
      step.rus(step.lime.refer('<='));
    },

    // Convert left parameter from integer to rational
    'l(int->rat)': (step) => {
      step.lps(step.left.toRational());
    },

    // Convert left parameter from variable to expression
    'l(var->exp)': (step) => {
      step.lps(step.left.value);
    },

    // Convert right parameter from integer to rational
    'r(int->rat)': (step) => {
      step.rps(step.right.toRational());
    },

    // Convert right parameter from variable to expression
    'r(var->exp)': (step) => {
      step.rps(step.right.value);
    },

    // Transfer right parameter to logical NOT
    'r(_!)': (step) => {
      step.rps(step.lime.refer('_!'));
    },

    // Transfer right parameter to negative
    'r(_-)': (step) => {
      step.rps(step.lime.refer('_-'));
    },

    // Transfer right parameter to positive
    'r(_+)': (step) => {
      step.rps(step.lime.refer('_+'));
    },
  },

  // Operation pairs
  pair: {
    // [Binary] Convert left parameter from integer to rational
    'cb(int->rat,rat)': ['b(int,rat)', 'l(int->rat)'],

    // [Binary] Convert right parameter from integer to rational
    'cb(rat,int->rat)': ['b(rat,int)', 'r(int->rat)'],

    // [Left unary] Convert from variable to expression
    'cl(var->exp)': ['l(var)', 'l(var->exp)'],

    // [Right unary] Convert from variable to expression
    'cr(var->exp)': ['r(var)', 'r(var->exp)'],

    // [Function] Transfer to equal
    'tf(==)': ['r(=)', 'f(==)'],

    // [Function] Transfer to factorial and equal
    'tf(!==)': ['r(=)', 'f(!==)'],

    // [Function] Transfer to greater equal
    'tf(>=)': ['r(=)', 'f(>=)'],

    // [Function] Transfer to logical AND
    'tf(&&)': ['r(&)', 'f(&&)'],

    // [Function] Transfer to logical OR
    'tf(||)': ['r(|)', 'f(||)'],

    // [Function] Transfer to not equal
    'tf(!=)': ['r(=)', 'f(!=)'],

    // [Function] Transfer to shift left
    'tf(<<)': ['r(<)', 'f(<<)'],

    // [Function] Transfer to shift right
    'tf(>>)': ['r(>)', 'f(>>)'],

    // [Function] Transfer to smaller equal
    'tf(<=)': ['r(=)', 'f(<=)'],

    // Transfer at zero position to logical NOT
    'tr(_!)': ['r(!)', 'r(_!)'],

    // [Right unary] Transfer to positive
    'tr(_+)': ['r(+)', 'r(_+)'],

    // [Right unary] Transfer to negative
    'tr(_-)': ['r(-)', 'r(_-)'],

    // Transfer at zero position to logical NOT
    'tz(_!)': ['z()', 'f(_!)'],

    // Transfer at zero position to positive
    'tz(_+)': ['z()', 'f(_+)'],

    // Transfer at zero position to negative
    'tz(_-)': ['z()', 'f(_-)'],
  },
};

/* ------------------------ division ------------------------ */

// Export
module.exports = Oplist;
