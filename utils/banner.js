// Require
const Package = require('../package.json');

/* ------------------------ division ------------------------ */

// Banner function
function banner() {
  const lines = [
    `Lime version ${Package.version}`,
    Package.description,
    `2021 ${Package.author}, ${Package.license} license`,
    Package.homepage.slice(0, -7),
  ];

  return lines.join('\n');
}

/* ------------------------ division ------------------------ */

// Export
module.exports = banner;
