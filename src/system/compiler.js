// Compiler object
const Compiler = {
  // Generic compiler
  generic: (C, n) => {
    Object.defineProperty(C, 'name', { value: `Lime${n}` });
    return C;
  },
};

/* ------------------------ division ------------------------ */

// Export
module.exports = Compiler;
