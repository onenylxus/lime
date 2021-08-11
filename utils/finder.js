// Require
const fs = require('fs');

/* ------------------------ division ------------------------ */

// Finder function
function finder(dir, type = '.js') {
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(type))
    .map((key) => key.slice(0, -type.length));
}

/* ------------------------ division ------------------------ */

// Export
module.exports = finder;
