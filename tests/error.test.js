// Require
const Bundle = require('../dist/bundle');
const Lime = require('../src/lime');
const Message = require('../lib/message.json');

// Error test
describe('Error handling test', () => {
  // Reset before each test
  let lime, bundle;
  beforeEach(() => {
    lime = Lime({ testMode: true });
    bundle = Bundle({ testMode: true });
  });

  test('invalid prompt input', () => {
    expect(lime.prompt().includes(Message['error:inputNotStringInPrompt'])).toBeTruthy();
    expect(bundle.prompt().includes(Message['error:inputNotStringInPrompt'])).toBeTruthy();
    expect(lime.prompt(1).includes(Message['error:inputNotStringInPrompt'])).toBeTruthy();
    expect(bundle.prompt(1).includes(Message['error:inputNotStringInPrompt'])).toBeTruthy();
    expect(lime.prompt([1]).includes(Message['error:inputNotStringInPrompt'])).toBeTruthy();
    expect(bundle.prompt([1]).includes(Message['error:inputNotStringInPrompt'])).toBeTruthy();
  });

  test('empty string in prompt input', () => {
    expect(lime.prompt('').includes(Message['error:inputEmptyInPrompt'])).toBeTruthy();
    expect(bundle.prompt('').includes(Message['error:inputEmptyInPrompt'])).toBeTruthy();
  });

  test('invalid direct input', () => {
    expect(lime.direct().includes(Message['error:inputNotArrayInDirect'])).toBeTruthy();
    expect(bundle.direct().includes(Message['error:inputNotArrayInDirect'])).toBeTruthy();
    expect(lime.direct(1).includes(Message['error:inputNotArrayInDirect'])).toBeTruthy();
    expect(bundle.direct(1).includes(Message['error:inputNotArrayInDirect'])).toBeTruthy();
    expect(lime.direct('1').includes(Message['error:inputNotArrayInDirect'])).toBeTruthy();
    expect(bundle.direct('1').includes(Message['error:inputNotArrayInDirect'])).toBeTruthy();
  });

  test('empty string in direct input', () => {
    expect(lime.direct([]).includes(Message['error:inputEmptyInDirect'])).toBeTruthy();
    expect(bundle.direct([]).includes(Message['error:inputEmptyInDirect'])).toBeTruthy();
  });

  test('invalid symbol', () => {
    expect(lime.prompt('`').includes(Message['error:invalidSymbol'])).toBeTruthy();
    expect(bundle.prompt('`').includes(Message['error:invalidSymbol'])).toBeTruthy();
  });

  test('unmatched brackets', () => {
    expect(lime.prompt('(').includes(Message['error:unmatchedBrackets'])).toBeTruthy();
    expect(bundle.prompt('(').includes(Message['error:unmatchedBrackets'])).toBeTruthy();
    expect(lime.prompt(')').includes(Message['error:unmatchedBrackets'])).toBeTruthy();
    expect(bundle.prompt(')').includes(Message['error:unmatchedBrackets'])).toBeTruthy();
    expect(lime.prompt('(]').includes(Message['error:unmatchedBrackets'])).toBeTruthy();
    expect(bundle.prompt('(]').includes(Message['error:unmatchedBrackets'])).toBeTruthy();
  });
});
