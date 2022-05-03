// Require
const Types = require('../../utils/types');

// Step class
class LimeStep {
  // Constructor
  constructor(lime, data, pos) {
    // Parent
    this.lime = lime;

    // Properties
    this.data = Types.isArray(data) ? data : [];
    this.pos = Types.isNumber(pos) && pos >= 0 && pos < this.data.length ? pos : -1;
    this.timestamp = Date.now();
  }

  // Get left parameter
  get left() {
    return this.data[this.pos - 1];
  }

  // Get function
  get func() {
    return this.data[this.pos];
  }

  // Get right parameter
  get right() {
    return this.data[this.pos + 1];
  }

  // Custom identify
  ci(...mods) {
    return (...values) => this.lime.identify(...mods)(...values);
  }

  // Left parameter identify
  lpi(...mods) {
    return this.lime.identify(...mods)(this.left);
  }

  // Function identify
  fi(...mods) {
    return this.lime.identify(...mods)(this.func);
  }

  // Right parameter identify
  rpi(...mods) {
    return this.lime.identify(...mods)(this.right);
  }

  // Binary parameter identify
  bpi(...mods) {
    return this.lime.identify(...mods)(this.left, this.right);
  }

  // Left parameter splice
  lps(...value) {
    this.data.splice(this.pos - 1, 1, ...value);
  }

  // Function splice
  fs(...value) {
    this.data.splice(this.pos, 1, ...value);
  }

  // Right parameter splice
  rps(...value) {
    this.data.splice(this.pos + 1, 1, ...value);
  }

  // Left unary splice
  lus(...value) {
    this.data.splice(this.pos - 1, 2, ...value);
  }

  // Right unary splice
  rus(...value) {
    this.data.splice(this.pos, 2, ...value);
  }

  // Binary splice
  bs(...value) {
    this.data.splice(this.pos - 1, 3, ...value);
  }

  // Nested splice
  ns(len, ...value) {
    this.data.splice(this.pos, len, ...value);
  }
}

// Export
module.exports = LimeStep;
