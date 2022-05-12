// Link to task: https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true

const NUM_ARRAY = [-4, -10, -9, 0, 4, 1];

function plusMinus(arr) {
  while (arr.length <= 100 && arr.length > 0) {
    let result = "";
    for (i = 0; i < arr.length; i++) {
      const positiveNumbers =
        arr.filter((number) => number > 0).length / arr.length;
      const negativeNumbers =
        arr.filter((number) => number < 0).length / arr.length;
      const zeroNumbers =
        arr.filter((number) => number === 0).length / arr.length;
      result = `${positiveNumbers.toFixed(6)}\n${negativeNumbers.toFixed(
        6
      )}\n${zeroNumbers.toFixed(6)}`;
      return result;
    }
  }
}

console.log(plusMinus(NUM_ARRAY));
