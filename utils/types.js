// Types class
class Types {
  // Undefined
  static isUndefined(...args) {
    return args.every((v) => v === undefined);
  }

  // Null
  static isNull(...args) {
    return args.every((v) => v === null);
  }

  // True
  static isTrue(...args) {
    return args.every((v) => v === true);
  }

  // False
  static isFalse(...args) {
    return args.every((v) => v === false);
  }

  // Boolean
  static isBoolean(...args) {
    return args.every((v) => typeof v === 'boolean');
  }

  // Number
  static isNumber(...args) {
    return args.every((v) => typeof v === 'number');
  }

  // String
  static isString(...args) {
    return args.every((v) => typeof v === 'string');
  }

  // Function
  static isFunction(...args) {
    return args.every((v) => typeof v === 'function');
  }

  // Array
  static isArray(...args) {
    return args.every((v) => v instanceof Array);
  }

  // Object
  static isObject(...args) {
    return args.every((v) => v instanceof Object);
  }

  // Class
  static isClass(type, ...args) {
    return args.every((v) => v instanceof type);
  }
}

// Export
module.exports = Types;
