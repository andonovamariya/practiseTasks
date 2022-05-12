"use strict";
// Link to task: https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true
const BEAUTIFUL_DAY1 = 20, BEAUTIFUL_DAY2 = 23, BEAUTIFUL_DAY3 = 6;
function beautifulDays(i, j, k) {
    let beautifulDays = [];
    for (let begin = i; begin <= j; begin++) {
        let convertedString = begin.toString();
        let substrings = convertedString.split("").reverse().join("");
        if ((begin - +substrings * 1) % k === 0) {
            beautifulDays.push(begin);
        }
    }
    const beautifulDaysNumber = beautifulDays.length;
    return beautifulDaysNumber;
}
console.log(beautifulDays(BEAUTIFUL_DAY1, BEAUTIFUL_DAY2, BEAUTIFUL_DAY3));
