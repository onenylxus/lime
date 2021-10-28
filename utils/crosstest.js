// Values
const VERSION = 2;

/* ------------------------ division ------------------------ */

// Cross test function
function crosstest(testFunc, expectFunc, limeClass, bundleClass, unit) {
  let count = 0;
  if (!unit.hasOwnProperty('version') || unit.version !== VERSION) {
    throw new Error('Invalid test script');
  }

  Object.values(unit.process).forEach((obj) => {
    const len = obj.tests.length;
    (testFunc)(`${obj.desc} (${len} test${len === 1 ? '' : 's'})`, () => {
      [limeClass, bundleClass].forEach((p) => {
        ['prompt', 'evaluate'].forEach((m) => {
          obj.tests.forEach((t) => {
            const lime = (p)({ testMode: true, ...obj.config }); const l = t.input.length;
            t.input.slice(0, -1).forEach((j) => lime[m](j));
            switch (t.type) {
              case 'equals':
                expectFunc(lime[m](t.input[l - 1])).toStrictEqual(t.output);
                break;

              default:
                throw new Error('Invalid test script');
            }
          });
        });
      });
    });
    count += len;
  });

  return count;
}

/* ------------------------ division ------------------------ */

// Export
module.exports = crosstest;
