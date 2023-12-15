const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (value === undefined) this.chain.push("( )");
    this.chain.push(`( ${value} )`);
    return this;
  },

  removeLink(index) {
    if (
      typeof index !== "number" ||
      index <= 0 ||
      index > this.chain.length
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.chain.splice(index - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const res = this.chain.join("~~");
    this.chain = [];
    return res;
  },
};

module.exports = {
  chainMaker
};
