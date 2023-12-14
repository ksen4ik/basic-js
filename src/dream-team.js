const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    let arrayString = [];
    let secretName = [];

    if(!Array.isArray(members)) return false;

    for(let item of members) {
        if(typeof(item) == 'string') arrayString.push(item.trim());
    };

    for(let i = 0; i < arrayString.length; i++) {
        for(let j = 0; j < 1; j++) {
            secretName.push(arrayString[i][j]);
        }
    }

    const sortedArray = secretName.sort((a, b) => a.localeCompare(b));
    return sortedArray.join('').toUpperCase();
}

module.exports = {
  createDreamTeam
};
