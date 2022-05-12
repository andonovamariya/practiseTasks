// Link to task: https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true

const BEAUTIFULDAY1 = 20,
  BEAUTIFULDAY2 = 23,
  BEAUTIFULDAY3 = 6;

function beautifulDays(i, j, k) {
  let beautifulDays = [];
  for (let begin = i; begin <= j; begin++) {
    let convertedString = begin.toString();
    let arrayOfSubstrings = convertedString.split("").reverse().join("");
    if ((begin - arrayOfSubstrings * 1) % k === 0) {
      beautifulDays.push(begin);
    }
  }
  const beautifulDaysNumber = beautifulDays.length;
  return beautifulDaysNumber;
}

console.log(beautifulDays(BEAUTIFULDAY1, BEAUTIFULDAY2, BEAUTIFULDAY3));
