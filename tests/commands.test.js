// Require
const units = require('../utils/units');
const Bundle = require('../dist/bundle');
const Lime = require('../src/lime');

/* ------------------------ division ------------------------ */

// Variables
let count = 0;

// Counting test
describe('Command counting test', () => {
  units('src/commands').forEach((key) => {
    test(key, () => {
      expect(units('tests/commands', '.json').includes(key)).toBeTruthy();
    });
  });
});

// Unit tests
units('tests/commands', '.json').forEach((key) => {
  const unit = require(`./commands/${key}`);

  describe(unit.name, () => {
    Object.values(unit.process).forEach((obj) => {
      const len = obj.tests.length;
      test(`${obj.desc} (${len} test${len === 1 ? '' : 's'})`, () => {
        [Lime, Bundle].forEach((p) => {
          for (let item in obj.tests) {
            const lime = (p)({ testMode: true, ...unit.config }), l = obj.tests[item].length;
            obj.tests[item].slice(0, -2).forEach((j) => lime.prompt(j));
            expect(lime.prompt(obj.tests[item][l - 2])).toStrictEqual(obj.tests[item][l - 1]);
          }
        });
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
