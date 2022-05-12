// Link to task: https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true

const NUM_ARRAY: number[] = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr: number[]): string {
  while (arr.length <= 100 && arr.length > 0) {
    let result: string = "";
    const positiveNumbers: number =
      arr.filter((number) => number > 0).length / arr.length;
    const negativeNumbers: number =
      arr.filter((number) => number < 0).length / arr.length;
    const zeroNumbers: number =
      arr.filter((number) => number === 0).length / arr.length;
    result = `${positiveNumbers.toFixed(6)}\n${negativeNumbers.toFixed(
      6
    )}\n${zeroNumbers.toFixed(6)}`;
    return result;
  }
  return "You entered an array which is not in the allowed interval. Try again, please.";
}

console.log(plusMinus(NUM_ARRAY));
