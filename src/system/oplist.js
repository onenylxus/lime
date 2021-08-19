// Operation list
const Oplist = {
  // Conditions
  cond: {
    // [Binary] Boolean, Boolean
    'b(bool,bool)': (step) => step.bpi('boolean'),

    // [Binary] Expression, Expression
    'b(expr,expr)': (step) => step.bpi('expression'),

    // [Binary] Integer, Integer
    'b(int,int)': (step) => step.bpi('integer'),

    // [Binary] Integer, Rational
    'b(int,rat)': (step) => step.lpi('integer') && step.rpi('rational'),

    // [Binary] Rational, Integer
    'b(rat,int)': (step) => step.lpi('rational') && step.rpi('integer'),

    // [Binary] Rational, Rational
    'b(rat,rat)': (step) => step.bpi('rational'),

    // [Binary] Variable, Expression
    'b(var,expr)': (step) => step.lpi('variable') && step.rpi('expression'),

    // [Left unary] Argument{Expression}
    'l(arg{expr})': (step) => step.lpi('argument') && step.left.length === 1 && step.ci('expression')(step.left.places[0]),

    // [Left unary] Boolean
    'l(bool)': (step) => step.lpi('boolean'),

    // [Left unary] Integer
    'l(int)': (step) => step.lpi('integer'),

    // [Left unary] Variable
    'l(var)': (step) => step.lpi('variable'),

    // [Left unary] Non-boolean
    'l(!bool)': (step) => !step.lpi('boolean'),

    // Nested
    'n()': () => true,

    // [Right unary] Argument{}
    'r(arg{})': (step) => step.rpi('argument') && step.right.isEmpty,

    // [Right unary] Argument{Expression}
    'r(arg{expr})': (step) => step.rpi('argument') && step.right.length === 1 && step.ci('expression')(step.right.places[0]),

    // [Right unary] Argument{Expression[2]}
    'r(arg{expr[2]})': (step) => step.rpi('argument') && step.right.length === 2 && step.ci('expression')(step.right.places[0], step.right.places[1]),

    // [Right unary] Argument{Expression[Any]}
    'r(arg{expr[@]})': (step) => step.rpi('argument') && step.ci('expression')(...step.right.places),

    // [Right unary] Argument{Integer}
    'r(arg{int})': (step) => step.rpi('argument') && step.right.length === 1 && step.ci('integer')(step.right.places[0]),

    // [Right unary] Argument{Integer[2]}
    'r(arg{int[2]})': (step) => step.rpi('argument') && step.right.length === 2 && step.ci('integer')(step.right.places[0], step.right.places[1]),

    // [Right unary] Argument{Integer[Any]}
    'r(arg{int[@]})': (step) => step.rpi('argument') && step.ci('integer')(...step.right.places),

    // [Right unary] Argument{Rational}
    'r(arg{rat})': (step) => step.rpi('argument') && step.right.length === 1 && step.ci('rational')(step.right.places[0]),

    // [Right unary] Boolean
    'r(bool)': (step) => step.rpi('boolean'),

    // [Right unary] Integer
    'r(int)': (step) => step.rpi('integer'),

    // [Right unary] Rational
    'r(rat)': (step) => step.rpi('rational'),

    // [Right unary] Variable
    'r(var)': (step) => step.rpi('variable'),

    // [Right unary] Non-boolean
    'r(!bool)': (step) => !step.rpi('boolean'),

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

    // Convert left parameter from argument length 1 to expression
    'l(arg{expr}->expr)': (step) => {
      step.lps(step.left.finalize());
    },

    // Convert left parameter from boolean to integer
    'l(expr->int)': (step) => {
      step.lps(step.left.toInteger());
    },

    // Convert left parameter from integer to rational
    'l(expr->rat)': (step) => {
      step.lps(step.left.toRational());
    },

    // Convert left parameter from variable to expression
    'l(var->expr)': (step) => {
      step.lps(step.left.value);
    },

    // Convert left parameter from non-boolean to boolean
    'l(!bool->bool)': (step) => {
      step.lps(step.left.toBoolean());
    },

    // Convert right parameter from argument length 1 to expression
    'r(arg{expr}->expr)': (step) => {
      step.rps(step.right.finalize());
    },

    // Convert right parameter from boolean to integer
    'r(expr->int)': (step) => {
      step.rps(step.right.toInteger());
    },

    // Convert right parameter from integer to rational
    'r(expr->rat)': (step) => {
      step.rps(step.right.toRational());
    },

    // Convert right parameter from variable to expression
    'r(var->expr)': (step) => {
      step.rps(step.right.value);
    },

    // Convert right parameter from non-boolean to boolean
    'r(!bool->bool)': (step) => {
      step.rps(step.right.toBoolean());
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
    'cb(int->rat,rat)': ['b(int,rat)', 'l(expr->rat)'],

    // [Binary] Convert right parameter from integer to rational
    'cb(rat,int->rat)': ['b(rat,int)', 'r(expr->rat)'],

    // [Left unary] Convert from argument length 1 to expression
    'cl(arg{expr}->expr)': ['l(arg{expr})', 'l(arg{expr}->expr)'],

    // [Left unary] Convert from boolean to integer
    'cl(bool->int)': ['l(bool)', 'l(expr->int)'],

    // [Left unary] Convert from variable to expression
    'cl(var->expr)': ['l(var)', 'l(var->expr)'],

    // [Left unary] Convert from non-boolean to boolean
    'cl(!bool->bool)': ['l(!bool)', 'l(!bool->bool)'],

    // [Right unary] Convert from argument length 1 to expression
    'cr(arg{expr}->expr)': ['r(arg{expr})', 'r(arg{expr}->expr)'],

    // [Right unary] Convert from boolean to integer
    'cr(bool->int)': ['r(bool)', 'r(expr->int)'],

    // [Right unary] Convert from variable to expression
    'cr(var->expr)': ['r(var)', 'r(var->expr)'],

    // [Right unary] Convert from non-boolean to boolean
    'cr(!bool->bool)': ['r(!bool)', 'r(!bool->bool)'],

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
