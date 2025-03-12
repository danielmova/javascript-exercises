const sumAll = function(arrayBeginning, arrayEnd) {
    const arrayTotal = [];
    let sumFinal = 0;

    if (arrayBeginning < 0 || arrayEnd < 0) return "ERROR";
    if (Number.isInteger(arrayBeginning) == false || Number.isInteger(arrayEnd) == false ) return "ERROR";

    if (arrayBeginning > arrayEnd){

        for (let i = arrayEnd; i < arrayBeginning + 1; i++){
            arrayTotal.push(i);
        }

        for (let i = 0; i < arrayTotal.length; i++){
            sumFinal += arrayTotal[i];
        }
        return sumFinal;
    }

    else if (arrayBeginning < arrayEnd){
        for (let i = arrayBeginning; i < arrayEnd + 1; i++){
            arrayTotal.push(i);
        }

        for (let i = 0; i < arrayTotal.length; i++){
            sumFinal += arrayTotal[i];
        }
        return sumFinal;
    }
};

console.log(sumAll(4,1));

// Do not edit below this line
module.exports = sumAll;
