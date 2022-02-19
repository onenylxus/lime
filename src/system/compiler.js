// Compiler object
class Compiler {
  // Generic compiler
  static strc(mods) {
    return mods.map(([n, C]) => {
      const m = `${n.charAt(0).toUpperCase()}${n.slice(1)}`;
      Object.defineProperty(C, 'name', { value: m.startsWith('Lime') ? m : `Lime${m}` });
      return [n, C];
    });
  }

  // Command compiler
  static cmd(mods) {
    return mods.map(([n, C]) => {
      const m = `${n.charAt(0).toUpperCase()}${n.slice(1)}`;
      Object.defineProperty(C, 'name', { value: m.startsWith('LimeCommand') ? m : `LimeCommand${m}` });
      return [n, C];
    });
  }

  // Expression compiler
  static expr(mods) {
    return mods.map(([n, C]) => {
      const m = `${n.charAt(0).toUpperCase()}${n.slice(1)}`;
      Object.defineProperty(C, 'name', { value: m.startsWith('LimeExpression') ? m : `LimeExpression${m}` });
      return [n, C];
    });
  }

  // Function compiler
  static func(mods) {
    return mods.map(([n, C]) => {
      const m = `${n.charAt(0).toUpperCase()}${n.slice(1)}`;
      Object.defineProperty(C, 'name', { value: m.startsWith('LimeFunction') ? m : `LimeFunction${m}` });
      return [n, C];
    });
  }
}

/* ------------------------ division ------------------------ */

// Export
module.exports = Compiler;
