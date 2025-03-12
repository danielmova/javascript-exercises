const reverseString = function(string) {
    arrayString = string.split("");
    let finalString = "";
    for(let i = arrayString.length; i != 0; i--){
        finalString += arrayString[i - 1];
    }
    return finalString;
};

console.log(reverseString("Hello"));

// Do not edit below this line
module.exports = reverseString;
