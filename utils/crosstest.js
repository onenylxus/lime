// Cross test function
function crosstest(testFunc, expectFunc, limeClass, bundleClass, unit) {
  let count = 0;
  Object.values(unit.process).forEach((obj) => {
    const len = obj.tests.length;
    (testFunc)(`${obj.desc} (${len} test${len === 1 ? '' : 's'})`, () => {
      [limeClass, bundleClass].forEach((p) => {
        ['prompt', 'evaluate'].forEach((m) => {
          obj.tests.forEach((t) => {
            const lime = (p)({ testMode: true, ...obj.config }), l = t.length;
            t.slice(0, -2).forEach((j) => lime[m](j));
            (expectFunc)(lime[m](t[l - 2])).toStrictEqual(t[l - 1]);
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
