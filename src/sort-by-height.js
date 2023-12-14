const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    if (!Array.isArray(arr)) return false;

    for (let item of arr) {
        if (typeof (item) !== 'number') return false;
    }

    let filteredArr = arr.filter(item => item !== -1);
    filteredArr.sort(function (a, b) { return a - b; });

    let resultArr = [];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === -1) {
            resultArr.push(-1);
        } else {
            resultArr.push(filteredArr[index]);
            index++;
        }
    }

    return resultArr;
}

module.exports = {
  sortByHeight
};
