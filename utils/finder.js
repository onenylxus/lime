// Require
const fs = require('fs');

// Finder function
function finder(dir, type = '') {
  return type.length > 0 ? fs.readdirSync(dir)
    .filter((file) => file.endsWith(type))
    .map((key) => key.slice(0, -type.length)) : fs.readdirSync(dir);
}

// Export
module.exports = finder;
