// Require
const Bundle = require('../dist/bundle');
const Lime = require('../src/lime');
const Message = require('../lib/message.json');

/* ------------------------ division ------------------------ */

// Error test
describe('Error handling test', () => {
  // Reset before each test
  let lime, bundle;
  beforeEach(() => {
    lime = Lime({ testMode: true });
    bundle = Bundle({ testMode: true });
  });

  test('invalid input', () => {
    expect(lime.prompt().includes(Message['error:inputNotString'])).toBeTruthy();
    expect(bundle.prompt().includes(Message['error:inputNotString'])).toBeTruthy();
    expect(lime.prompt(1).includes(Message['error:inputNotString'])).toBeTruthy();
    expect(bundle.prompt(1).includes(Message['error:inputNotString'])).toBeTruthy();
  });

  test('empty string input', () => {
    expect(lime.prompt('').includes(Message['error:inputEmpty'])).toBeTruthy();
    expect(bundle.prompt('').includes(Message['error:inputEmpty'])).toBeTruthy();
  });

  test('invalid symbol', () => {
    expect(lime.prompt('`').includes(Message['error:invalidSymbol'])).toBeTruthy();
    expect(bundle.prompt('`').includes(Message['error:invalidSymbol'])).toBeTruthy();
  });
});
