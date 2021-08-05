// Require
const fs = require('fs');

/* ------------------------ division ------------------------ */

// Unit function
function units(dir, type = '.js') {
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(type))
    .map((key) => key.slice(0, -type.length));
}

/* ------------------------ division ------------------------ */

// Export
module.exports = units;
