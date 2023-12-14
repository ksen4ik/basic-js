const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const array = Array.from(String(n), Number);
  let maxNumber = -Infinity;

  for (let i = 0; i < array.length; i++) {
    const tempArray = [...array];
    tempArray.splice(i, 1);

    const number = Number(tempArray.join(''));
    if (number > maxNumber) maxNumber = number;
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};
