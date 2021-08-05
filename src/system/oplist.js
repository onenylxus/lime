// Operation list
const Oplist = {
  // Conditions
  cond: {
    // Binary: Integer, Integer
    'b(int,int)': (step) => step.bpi('integer'),

    // Binary: Integer, Rational
    'b(int,rat)': (step) => step.lpi('integer') && step.rpi('rational'),

    // Binary: Rational, Integer
    'b(rat,int)': (step) => step.lpi('rational') && step.rpi('integer'),

    // Binary: Rational, Rational
    'b(rat,rat)': (step) => step.bpi('rational'),
  },

  // Actions
  act: {
    // Convert left parameter from integer to rational
    'l(int>rat)': (step) => {
      step.lps(step.left.toRational());
    },

    // Convert right parameter from integer to rational
    'r(int>rat)': (step) => {
      step.rps(step.right.toRational());
    },
  },

  // Operation pairs
  pair: {
    // Binary: Convert left parameter from integer to rational
    'cb(int>rat,rat)': ['b(int,rat)', 'l(int>rat)'],

    // Binary: Convert right parameter from integer to rational
    'cb(rat,int>rat)': ['b(rat,int)', 'r(int>rat)'],
  },
};

/* ------------------------ division ------------------------ */

// Export
module.exports = Oplist;
