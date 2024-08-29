const sumAll = function(firstNum, lastNum) {
    let result = 0;
    if (firstNum < 0 || lastNum < 0 || firstNum % 1 != 0
        || lastNum % 1 != 0 || typeof firstNum != "number" ||
        typeof lastNum != "number"
    ) {
        return "ERROR";
    } else if (lastNum < firstNum && lastNum > 0) {
        if (firstNum > lastNum) {
            for (i = 0; lastNum + i <= firstNum; i++) {
                result += i + lastNum;
            }
        }
    } else if (firstNum < lastNum && firstNum > 0) {
        for (i = 0; i + firstNum <= lastNum; i++) {
            result += i + firstNum;
        }
    } 
    return result;
};

// Do not edit below this line
module.exports = sumAll;
