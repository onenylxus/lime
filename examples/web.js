// Require
const express = require('express');
const fs = require('fs');
const path = require('path');

/* ------------------------ division ------------------------ */

// Build application
const app = express();
const port = process.env.PORT || 3000;

// Copy bundle file
fs.copyFile('../dist/bundle.js', './bundle.js', (err) => {
  if (err) { throw err; }
  console.log('Copied bundle file');
});

// Run express
app.use(express.static(path.join(__dirname, '/')));
app.listen(port, console.log(`Express server hosted on http://localhost:${port}`));
