# Lime
Lime is a mathematics computation engine written in JavaScript.

## Installation
Step 1: Make sure that `node` version is at least `14`:
```bat
node --version
```

Step 2: Install Lime through `npm` or `yarn`:

```bat
npm install @onenylxus/lime
yarn add @onenylxus/lime
```

## Application
Lime has two operation modes: prompt mode and evaluate mode. Below is an example of using Lime:

```js
// Require
const Lime = require('@onenylxus/lime')();

// Prompt mode
Lime.prompt('3*(3+5)/2'); // '12'
Lime.prompt(''); // returns error message in string

// Evaluate mode
Lime.evaluate('3*(3+5)/2'); // '12'
Lime.evaluate(''); // returns error message in Error object
```
