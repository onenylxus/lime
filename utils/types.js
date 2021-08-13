// Types class
class Types {
  // Auto detect type
  static auto(...args) {
    const res = args.map((v) => {
      if (Types.isUndefined(v)) { return 'undefined'; }
      if (Types.isNull(v)) { return 'null'; }
      if (Types.isBoolean(v)) { return 'boolean'; }
      if (Types.isNumber(v)) { return 'number'; }
      if (Types.isString(v)) { return 'string'; }
      if (Types.isFunction(v)) { return 'function'; }
      if (Types.isArray(v)) { return 'array'; }
      if (Types.isObject(v)) { return 'object'; }
      return '';
    });
    return res.length > 1 ? res : res[0];
  }

  /* ------------------------ division ------------------------ */

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

  /* ------------------------ division ------------------------ */

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

/* ------------------------ division ------------------------ */

// Export
module.exports = Types;
