const repeatString = function(word, num) {
    if (num > 0) {
        let string = "";
        for (let i = 0; i < num; i++) { 
            string += word;
        }
        return string; 
    } else if (num === 0) {
        return "";
    } else {
        return "ERROR";
    } 
};

// Do not edit below this line
module.exports = repeatString;
