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
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] == '--discard-next') {
                if(arr[i+1]) {
                    let index00 = arr.indexOf('--discard-next');
                    arr.splice(index00, 2);
                }
            } else if(arr[i] == '--discard-prev') {
                if(arr[i-1]) {
                    let index11 = arr.indexOf(arr[i-1]);
                    arr.splice(index11, 2);
                }
            } else if(arr[i] == '--double-next') {
                if(arr[i+1]) {
                    arr[i] = arr[i+1];
                }
            } else if(arr[i] == '--double-prev') {
                if(arr[i-1]) {
                    arr[i] = arr[i-1];
                }
            }
        }
        return arr;
    } else {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }
}

module.exports = {
  transform
};
