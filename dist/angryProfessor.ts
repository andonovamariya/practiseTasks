// Link to task: https://www.hackerrank.com/challenges/angry-professor/problem?isFullScreen=true

const NUM_STUDENTS: number = 2;
const ARRIVAL_TIMES: number[] = [0, -1, 2, 1];

function angryProfessor(k: number, a: number[]): string {
  let count: number = 0;
  let answer: string = "YES";
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
