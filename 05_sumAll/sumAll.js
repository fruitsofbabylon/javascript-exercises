const sumAll = function(min, max) {
    let sum = 0;
    if (min < 0 || max < 0 || !Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
    if (min > max) {
        let disp = min;
        min = max;
        max = disp;
    }
    while (min <= max) {
        sum += min;
        min++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
