// Require
const Package = require('../package.json');

/* ------------------------ division ------------------------ */

// Banner function
function banner() {
  return [
    `Lime version ${Package.version}`,
    Package.description,
    `2021-2022 ${Package.author}, ${Package.license} license`,
    Package.homepage.slice(0, -7),
  ].join('\n');
}

/* ------------------------ division ------------------------ */

// Export
module.exports = banner;
