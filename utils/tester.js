// Require
const finder = require('./finder');
const Bundle = require('../dist/bundle');
const Lime = require('../src/lime');
const { TEST_VERSION } = require('../lib/version.json');

// Tester function
function tester(df, tf, ef) {
  return (type) => {
    // Variables
    const name = type[0].toUpperCase() + type.slice(1, -1);
    const folders = [`src/${type}`, ...finder(`src/${type}`).filter((key) => key.indexOf('.') === -1).map((folder) => `src/${type}/${folder}`)];
    let count = 0;

    // Matching test
    df(`${name} matching test`, () => {
      folders.forEach((folder) => {
        finder(folder, '.js').forEach((key) => {
          tf(key, () => {
            ef(finder(folder.replace('src', 'tests'), '.json').includes(key)).toBeTruthy();
          });
        });
      });
    });

    // Unit tests
    folders.map((folder) => folder.replace('src', 'tests')).forEach((folder) => {
      finder(folder, '.json').forEach((key) => {
        const unit = require(`../${folder}/${key}`);
        df(unit.name, () => {
          // Check test script version
          if (!unit.hasOwnProperty('version') || unit.version !== TEST_VERSION) {
            throw new Error('Invalid test script');
          }

          // Cross testing
          Object.values(unit.process).forEach((obj) => {
            const len = obj.tests.length;
            tf(`${obj.desc} (${len} test${len === 1 ? '' : 's'})`, () => {
              [Lime, Bundle].forEach((p) => {
                ['prompt', 'evaluate'].forEach((m) => {
                  obj.tests.forEach((t) => {
                    const lime = (p)({ testMode: true, ...obj.config }); const l = t.input.length;
                    t.input.slice(0, -1).forEach((i) => lime[m](i));

                    switch (t.type) {
                      case 'equals':
                        ef(lime[m](t.input[l - 1])).toStrictEqual(t.output);
                        break;

                      case 'throws':
                        ef(lime[m](t.input[l - 1])).toStrictEqual(m === 'prompt' ? lime.message(new Error(t.output)) : '');
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
        });
      });
    });

    // Report
    df('Report', () => {
      tf(`Number of tests: ${count}`, () => {
        ef(true).toBeTruthy();
      });
    });
  };
}

// Export
module.exports = tester;
