// Require
const units = require('../utils/units');
const Bundle = require('../dist/bundle');
const Lime = require('../src/lime');

/* ------------------------ division ------------------------ */

// Variables
let count = 0;

// Counting test
describe('Expression counting test', () => {
  units('src/expressions').forEach((key) => {
    test(key, () => {
      expect(units('tests/expressions', '.json').includes(key)).toBeTruthy();
    });
  });
});

// Unit tests
units('tests/expressions', '.json').forEach((key) => {
  const unit = require(`./expressions/${key}`);
  const lime = Lime({ testMode: true, ...unit.config });
  const bundle = Bundle({ testMode: true, ...unit.config });

  describe(unit.name, () => {
    Object.values(unit.process).forEach((obj) => {
      const len = obj.tests.length;
      test(`${obj.desc} (${len} test${len === 1 ? '' : 's'})`, () => {
        for (let item in obj.tests) {
          const input = obj.tests[item][0], output = obj.tests[item][1];
          expect(lime.prompt(input)).toStrictEqual(output);
          expect(bundle.prompt(input)).toStrictEqual(output);
        }
      });
      count += len;
    });
  });
});

// Report
describe('Report', () => {
  test(`Number of tests: ${count}`, () => {
    expect(true).toBeTruthy();
  });
});
