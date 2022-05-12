// Link to task: https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true
const N_VALUE = 6;

function staircase(n) {
  if (n > 0 && n <= 100) {
    let row = "";
    for (let i = 1; i <= n; i++) {
      for (let j = n - 1; j >= i; j--) {
        row += " ";
      }

      for (let k = 1; k <= i; k++) {
        row += "#";
      }
      row += "\n";
    }
    return row;
  } else {
    return "You entered invalid value for n. Try again, please.";
  }
}

console.log(staircase(N_VALUE));
