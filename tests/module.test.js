// Require
const fs = require('fs');
const finder = require('../utils/finder');
const Module = require('../src/system/module');

// Variables
const count = {};

// Module test
describe('Module test', () => {
  count.cmd = 0;
  describe('Commands', () => {
    finder('src/commands', '.js').forEach((key) => {
      test(key, () => {
        expect(Module.has(key)).toBeTruthy();
      });
      count.cmd++;
    });
  });

  count.expr = 0;
  describe('Expressions', () => {
    finder('src/expressions', '.js').forEach((key) => {
      test(key, () => {
        expect(Module.has(key)).toBeTruthy();
      });
      count.expr++;
    });
  });

  count.func = 0;
  describe('Functions', () => {
    fs.readdirSync('src/functions').forEach((folder) => {
      finder(`src/functions/${folder}`, '.js').forEach((key) => {
        test(key, () => {
          expect(Module.has(key)).toBeTruthy();
        });
        count.func++;
      });
    });
  });

  count.strc = 0;
  describe('Structures', () => {
    finder('src/structs', '.js').forEach((key) => {
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
