"use strict";
// Link to task: https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true
const NUM_ARRAY = [-4, 3, -9, 0, 4, 1];
function plusMinus(arr) {
    while (arr.length <= 100 && arr.length > 0) {
        let result = "";
        const positiveNumbers = arr.filter((number) => number > 0).length / arr.length;
        const negativeNumbers = arr.filter((number) => number < 0).length / arr.length;
        const zeroNumbers = arr.filter((number) => number === 0).length / arr.length;
        result = `${positiveNumbers.toFixed(6)}\n${negativeNumbers.toFixed(6)}\n${zeroNumbers.toFixed(6)}`;
        return result;
    }
    return "You entered an array which is not in the allowed interval. Try again, please.";
}
console.log(plusMinus(NUM_ARRAY));
