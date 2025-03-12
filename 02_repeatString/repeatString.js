const repeatString = function(stringToRepeat, repetitionNumber) {
    const finalString = [];
    if(repetitionNumber < 0){
        const ERROR = "ERROR"
        return ERROR;
    }
    else {
        for(let i = 0; i < repetitionNumber; i++){
            finalString.push(stringToRepeat);
        }

        return finalString.join("");
    }
};

console.log(repeatString("", 3));

// Do not edit below this line
module.exports = repeatString;
