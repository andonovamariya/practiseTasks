// Link to task: https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true

const BEAUTIFUL_DAY1: number = 20,
  BEAUTIFUL_DAY2: number = 23,
  BEAUTIFUL_DAY3: number = 6;

function beautifulDays(i: number, j: number, k: number): number {
  let beautifulDays: number[] = [];
  for (let begin: number = i; begin <= j; begin++) {
    let convertedString: string = begin.toString();
    let substrings: string = convertedString.split("").reverse().join("");
    if ((begin - +substrings * 1) % k === 0) {
      beautifulDays.push(begin);
    }
  }
  const beautifulDaysNumber: number = beautifulDays.length;
  return beautifulDaysNumber;
}

console.log(beautifulDays(BEAUTIFUL_DAY1, BEAUTIFUL_DAY2, BEAUTIFUL_DAY3));
