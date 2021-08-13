// Require
const Types = require('../utils/types');

/* ------------------------ division ------------------------ */

// Types test
describe('Types test', () => {
  // Undefined
  test('undefined', () => {
    expect(Types.auto(undefined)).toStrictEqual('undefined');
    expect(Types.isUndefined(undefined)).toBeTruthy();
    expect(Types.isUndefined(undefined, undefined)).toBeTruthy();
    expect(Types.isUndefined(1)).toBeFalsy();
    expect(Types.isUndefined(1, 1)).toBeFalsy();
    expect(Types.isUndefined(undefined, 1)).toBeFalsy();
    expect(Types.isUndefined(1, undefined)).toBeFalsy();
  });

  // Null
  test('null', () => {
    expect(Types.auto(null)).toStrictEqual('null');
    expect(Types.isNull(null)).toBeTruthy();
    expect(Types.isNull(null, null)).toBeTruthy();
    expect(Types.isNull(1)).toBeFalsy();
    expect(Types.isNull(1, 1)).toBeFalsy();
    expect(Types.isNull(null, 1)).toBeFalsy();
    expect(Types.isNull(1, null)).toBeFalsy();
  });

  // True
  test('true', () => {
    expect(Types.isTrue(true)).toBeTruthy();
    expect(Types.isTrue(true, true)).toBeTruthy();
    expect(Types.isTrue(false)).toBeFalsy();
    expect(Types.isTrue(false, 1)).toBeFalsy();
    expect(Types.isTrue(true, 1)).toBeFalsy();
    expect(Types.isTrue(false, true)).toBeFalsy();
  });

  // False
  test('false', () => {
    expect(Types.isFalse(false)).toBeTruthy();
    expect(Types.isFalse(false, false)).toBeTruthy();
    expect(Types.isFalse(true)).toBeFalsy();
    expect(Types.isFalse(true, 0)).toBeFalsy();
    expect(Types.isFalse(false, 0)).toBeFalsy();
    expect(Types.isFalse(true, false)).toBeFalsy();
  });

  /* ------------------------ division ------------------------ */

  // Boolean
  test('boolean', () => {
    expect(Types.auto(true, false)).toStrictEqual(['boolean', 'boolean']);
    expect(Types.isBoolean(true)).toBeTruthy();
    expect(Types.isBoolean(true, false)).toBeTruthy();
    expect(Types.isBoolean(0)).toBeFalsy();
    expect(Types.isBoolean(0, 1)).toBeFalsy();
    expect(Types.isBoolean(true, 1)).toBeFalsy();
    expect(Types.isBoolean(0, false)).toBeFalsy();
  });

  // Number
  test('number', () => {
    expect(Types.auto(1)).toStrictEqual('number');
    expect(Types.isNumber(1)).toBeTruthy();
    expect(Types.isNumber(1, 2.3)).toBeTruthy();
    expect(Types.isNumber('')).toBeFalsy();
    expect(Types.isNumber('', [])).toBeFalsy();
    expect(Types.isNumber(1, [])).toBeFalsy();
    expect(Types.isNumber('', 2.3)).toBeFalsy();
  });

  // String
  test('string', () => {
    expect(Types.auto('')).toStrictEqual('string');
    expect(Types.isString('')).toBeTruthy();
    expect(Types.isString('', 'a')).toBeTruthy();
    expect(Types.isString(1)).toBeFalsy();
    expect(Types.isString(1, [])).toBeFalsy();
    expect(Types.isString('', [])).toBeFalsy();
    expect(Types.isString(1, 'a')).toBeFalsy();
  });

  // Function
  test('function', () => {
    expect(Types.auto(() => 0)).toStrictEqual('function');
    expect(Types.isFunction(() => 0)).toBeTruthy();
    expect(Types.isFunction(() => 0, () => '')).toBeTruthy();
    expect(Types.isFunction(1)).toBeFalsy();
    expect(Types.isFunction(1, [])).toBeFalsy();
    expect(Types.isFunction(() => 0, [])).toBeFalsy();
    expect(Types.isFunction(1, () => '')).toBeFalsy();
  });

  // Array
  test('array', () => {
    expect(Types.auto([])).toStrictEqual('array');
    expect(Types.isArray([])).toBeTruthy();
    expect(Types.isArray([], [0])).toBeTruthy();
    expect(Types.isArray(1)).toBeFalsy();
    expect(Types.isArray(1, '')).toBeFalsy();
    expect(Types.isArray([], '')).toBeFalsy();
    expect(Types.isArray(1, [0])).toBeFalsy();
  });

  // Object
  test('object', () => {
    expect(Types.auto({})).toStrictEqual('object');
    expect(Types.isObject({})).toBeTruthy();
    expect(Types.isObject({}, { a: 1 })).toBeTruthy();
    expect(Types.isObject(1)).toBeFalsy();
    expect(Types.isObject(1, '')).toBeFalsy();
    expect(Types.isObject({}, '')).toBeFalsy();
    expect(Types.isObject(1, { a: 1 })).toBeFalsy();
  });

  // Class
  test('class', () => {
    class A { constructor() {} }
    class B { constructor() {} }
    class C extends A {}

    expect(Types.isClass(A, new A())).toBeTruthy();
    expect(Types.isClass(A, new A(), new C())).toBeTruthy();
    expect(Types.isClass(A, 1)).toBeFalsy();
    expect(Types.isClass(A, 1, '')).toBeFalsy();
    expect(Types.isClass(A, new A(), '')).toBeFalsy();
    expect(Types.isClass(A, 1, new C())).toBeFalsy();
    expect(Types.isClass(A, new B())).toBeFalsy();
    expect(Types.isClass(B, new A())).toBeFalsy();
    expect(Types.isClass(C, new A())).toBeFalsy();
  });
});
