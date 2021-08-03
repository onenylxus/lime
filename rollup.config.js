// Import
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';

/* ------------------------ division ------------------------ */

// Production mode check
const prod = !process.env.ROLLUP_WATCH;

// Export
export default {
  input: 'src/lime.js',
  output: [
    // CJS format (for Node)
    {
      file: 'dist/bundle-cjs.js',
      format: 'cjs',
      exports: 'default',
    },

    // ESM format (for Browser)
    {
      file: 'dist/bundle-esm.js',
      format: 'esm',
      exports: 'default',
    },

    // UMD format (for Node and Browser)
    {
      name: 'Lime',
      file: 'dist/bundle.js',
      format: 'umd',
      exports: 'default',
    },
  ],
  plugins: [
    commonjs({
      ignoreDynamicRequires: true,
      dynamicRequireTargets: ['../src/**/*.js'],
    }),
    json({ compact: true }),
    resolve({ preferBuiltins: true }),
    prod && uglify({
      output: { preamble: `/*\n${require('./utils/banner')()}\n*/\n` }
    }),
  ],
};
