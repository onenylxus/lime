// Require
const fs = require('fs');
const units = require('../utils/units');
const Module = require('../src/system/module');

/* ------------------------ division ------------------------ */

// Variables
const count = {};

// Module test
describe('Module test', () => {
  count.expr = 0;
  describe('Expressions', () => {
    units('src/expressions').forEach((key) => {
      test(key, () => {
        expect(Module.has(key)).toBeTruthy();
      });
      count.expr++;
    });
  });

  count.func = 0;
  describe('Functions', () => {
    fs.readdirSync('src/functions').forEach((folder) => {
      units(`src/functions/${folder}`).forEach((key) => {
        test(key, () => {
          expect(Module.has(key)).toBeTruthy();
        });
        count.func++;
      });
    });
  });

  count.strc = 0;
  describe('Structures', () => {
    units('src/structs').forEach((key) => {
      test(key, () => {
        expect(Module.has(key)).toBeTruthy();
      });
      count.strc++;
    });
  });

  describe('Test count', () => {
    test(`Number of expressions: ${count.expr}`, () => {
      expect(true).toBeTruthy();
    });
    test(`Number of functions: ${count.func}`, () => {
      expect(true).toBeTruthy();
    });
    test(`Number of structures: ${count.strc}`, () => {
      expect(true).toBeTruthy();
    });
  });
});
