const fibonacci = function(num) {
    index = Number(num);
    if (index < 0) {
        return 'OOPS';
    } else {
        let prevNum = 0;
        let nextNum = 1;
        let arr = [];
        for (let i = 0; i <= 30; i ++) {
            arr[i] = prevNum;                  
            arr[i + 1] = prevNum + nextNum;    
            let temp = nextNum;
            nextNum += prevNum;                
            prevNum = temp;
        }
        return arr[index];
    }
};

// Do not edit below this line
module.exports = fibonacci;
