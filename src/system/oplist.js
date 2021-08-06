// Operation list
const Oplist = {
  // Conditions
  cond: {
    // [Binary] Integer, Integer
    'b(int,int)': (step) => step.bpi('integer'),

    // [Binary] Integer, Rational
    'b(int,rat)': (step) => step.lpi('integer') && step.rpi('rational'),

    // [Binary] Rational, Integer
    'b(rat,int)': (step) => step.lpi('rational') && step.rpi('integer'),

    // [Binary] Rational, Rational
    'b(rat,rat)': (step) => step.bpi('rational'),

    // Nested
    'n()': () => true,

    // [Right unary] Integer
    'r(int)': (step) => step.rpi('integer'),

    // [Right unary] Rational
    'r(rat)': (step) => step.rpi('rational'),

    // [Right unary] Add
    'r(+)': (step) => step.rpi('add'),

    // [Right unary] Negative
    'r(_-)': (step) => step.rpi('negative'),

    // [Right unary] Positive
    'r(_+)': (step) => step.rpi('positive'),

    // [Right unary] Subtract
    'r(-)': (step) => step.rpi('subtract'),

    // Zero position
    'z()': (step) => step.pos === 0,
  },

  // Actions
  act: {
    // Transfer function from add to positive
    'f(_+)': (step) => {
      step.fs(step.lime.refer('_+'));
    },

    // Transfer function from subtract to negative
    'f(_-)': (step) => {
      step.fs(step.lime.refer('_-'));
    },

    // Convert left parameter from integer to rational
    'l(int->rat)': (step) => {
      step.lps(step.left.toRational());
    },

    // Convert right parameter from integer to rational
    'r(int->rat)': (step) => {
      step.rps(step.right.toRational());
    },

    // Transfer right parameter from add to positive
    'r(_+)': (step) => {
      step.rps(step.lime.refer('_+'));
    },

    // Transfer right parameter from subtract to negative
    'r(_-)': (step) => {
      step.rps(step.lime.refer('_-'));
    },
  },

  // Operation pairs
  pair: {
    // [Binary] Convert left parameter from integer to rational
    'cb(int->rat,rat)': ['b(int,rat)', 'l(int->rat)'],

    // [Binary] Convert right parameter from integer to rational
    'cb(rat,int->rat)': ['b(rat,int)', 'r(int->rat)'],

    // [Right unary] Transfer right parameter from add to positive
    'tr(_+)': ['r(+)', 'r(_+)'],

    // [Right unary] Transfer right parameter from subtract to negative
    'tr(_-)': ['r(-)', 'r(_-)'],

    // Transfer at zero position from add to positive
    'tz(_+)': ['z()', 'f(_+)'],

    // Transfer at zero position from subtract to negative
    'tz(_-)': ['z()', 'f(_-)'],
  },
};

/* ------------------------ division ------------------------ */

// Export
module.exports = Oplist;
