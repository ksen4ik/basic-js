const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    if(Array.isArray(arr)) {
        var newArr = [...arr];
        for(let i = 0; i < newArr.length; i++) {
            if(newArr[i] == '--discard-next') {
                if(newArr[i+1]) {
                    let index00 = newArr.indexOf('--discard-next');
                    newArr.splice(index00, 2);
                } else {
                    newArr.splice(-1, 1);
                }
            }
            if(newArr[i] == '--discard-prev') {
                if(newArr[i-1]) {
                    let index11 = newArr.indexOf(newArr[i-1]);
                    newArr.splice(index11, 2);
                } else {
                    newArr.splice(0, 1);
                }
            }
            if(newArr[i] == '--double-next') {
                if(newArr[i+1]) {
                    newArr[i] = newArr[i+1];
                } else {
                    newArr.splice(-1, 1);
                }
            }
            if(newArr[i] == '--double-prev') {
                if(newArr[i-1]) {
                    newArr[i] = newArr[i-1];
                } else {
                    newArr.splice(0, 1);
                }
            }
        }
        return newArr;
    } else {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }
}

module.exports = {
  transform
};
