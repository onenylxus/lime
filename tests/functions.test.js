// Require
const fs = require('fs');
const units = require('../utils/units');
const Bundle = require('../dist/bundle');
const Lime = require('../src/lime');

/* ------------------------ division ------------------------ */

// Variables
let count = 0;

// Counting test
describe('Function counting test', () => {
  fs.readdirSync('src/functions').forEach((folder) => {
    units(`src/functions/${folder}`).forEach((key) => {
      test(`${folder}/${key}`, () => {
        expect(units(`tests/functions/${folder}`, '.json').includes(key)).toBeTruthy();
      });
    });
  });
});

// Unit tests
fs.readdirSync('tests/functions').forEach((folder) => {
  units(`tests/functions/${folder}`, '.json').forEach((key) => {
    const unit = require(`./functions/${folder}/${key}`);
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
});

// Report
describe('Report', () => {
  test(`Number of tests: ${count}`, () => {
    expect(true).toBeTruthy();
  });
});
