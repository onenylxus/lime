// Require
const Package = require('../package.json');

/* ------------------------ division ------------------------ */

// Banner function
function banner() {
  return `Lime version ${Package.version}\n${Package.description}\n2021 ${Package.author}, ${Package.license} license\n${Package.homepage.slice(0, -7)}`;
}

/* ------------------------ division ------------------------ */

// Export
module.exports = banner;
