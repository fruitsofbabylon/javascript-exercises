const palindromes = function (string) {
    let str = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,'').toLowerCase();
    let revStr = str.split('').reverse().join('');
    return str == revStr ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
