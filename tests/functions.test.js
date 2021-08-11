// Require
const fs = require('fs');
const crosstest = require('../utils/crosstest');
const finder = require('../utils/finder');
const Bundle = require('../dist/bundle');
const Lime = require('../src/lime');

/* ------------------------ division ------------------------ */

// Variables
let count = 0;

// Counting test
describe('Function counting test', () => {
  fs.readdirSync('src/functions').forEach((folder) => {
    finder(`src/functions/${folder}`).forEach((key) => {
      test(`${folder}/${key}`, () => {
        expect(finder(`tests/functions/${folder}`, '.json').includes(key)).toBeTruthy();
      });
    });
  });
});

// Unit tests
fs.readdirSync('tests/functions').forEach((folder) => {
  finder(`tests/functions/${folder}`, '.json').forEach((key) => {
    const unit = require(`./functions/${folder}/${key}`);

    describe(unit.name, () => {
      count += crosstest(test, expect, Lime, Bundle, unit);
    });
  });
});

// Report
describe('Report', () => {
  test(`Number of tests: ${count}`, () => {
    expect(true).toBeTruthy();
  });
});
