const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
    let domain = ''
    const dogSymbol = '@';
    const index = email.lastIndexOf(dogSymbol);
    const lastIndex = email.length - 1;

    domain = email.substring(index + 1, lastIndex + 1)

    return domain;
}

module.exports = {
  getEmailDomain
};
