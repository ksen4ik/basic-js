const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    arr.forEach(a => {
      let curDepth = 1;
      if (Array.isArray(a)) {
        curDepth += this.calculateDepth(a);
        if (curDepth > depth) {
          depth = curDepth;
        }
      }
    })
    return depth;
  }
}

module.exports = {
  DepthCalculator
};
