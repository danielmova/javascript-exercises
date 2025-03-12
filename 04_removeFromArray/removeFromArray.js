function removeFromArray(arrayToClean, ...args) {
    return arrayToClean.filter(x => !args.includes(x))
};

console.log(removeFromArray([1, 2, 3], 2));

// Do not edit below this line
module.exports = removeFromArray;
