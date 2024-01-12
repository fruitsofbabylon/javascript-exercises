const repeatString = function(string, num) {
    let output = '';
    let i = 1;
    while (i <= num) {
        output += string;
        i++;
    }
    if (num < 0) {
        output = 'ERROR';
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
