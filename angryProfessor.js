// Link to task: https://www.hackerrank.com/challenges/angry-professor/problem?isFullScreen=true

const NUM_STUDENTS = 2;
const ARRIVAL_TIMES = [0, -1, 2, 1];

function angryProfessor(k, a) {
  let count = 0;
  let answer = "YES";
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) {
      count += 1;
    }
  }
  if (count >= k) {
    answer = "NO";
  }
  return answer;
}

console.log(angryProfessor(NUM_STUDENTS, ARRIVAL_TIMES));
