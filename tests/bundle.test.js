// Require
const fs = require('fs');

// Bundle test
describe('Bundle test', () => {
  const dir = './dist/bundle', num = Math.trunc(1 / Math.random());

  test('CJS bundle', () => {
    let lime = require(`../${dir}-cjs.js`)({ testMode: true });
    expect(fs.readFileSync(`${dir}-cjs.js`).length).toBeGreaterThan(0);
    expect(lime.config.testMode).toBeTruthy();
    expect(lime.prompt(`${num}`)).toEqual(`${num}`);
  });

  test('ESM bundle', () => {
    expect(fs.readFileSync(`${dir}-esm.js`).length).toBeGreaterThan(0);
  });

  test('UMD bundle', () => {
    let lime = require(`../${dir}.js`)({ testMode: true });
    expect(fs.readFileSync(`${dir}.js`).length).toBeGreaterThan(0);
    expect(lime.config.testMode).toBeTruthy();
    expect(lime.prompt(`${num}`)).toEqual(`${num}`);
  });
});
