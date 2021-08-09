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
});

// Report
describe('Report', () => {
  test(`Number of tests: ${count}`, () => {
    expect(true).toBeTruthy();
  });
});
