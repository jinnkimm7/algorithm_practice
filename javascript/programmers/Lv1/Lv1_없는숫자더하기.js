// function solution(numbers) {
//   let arr = [];
//   for (let i = 0; i < 10; i++) {
//     if (!(numbers.includes(i))) arr.push(i);
//   }

//   return arr.reduce((acc, cur) => acc + cur);
// }

// function solution(numbers) {
//   let answer = 0;
//   for (let i = 0; i < 10; i++) {
//     if (!(numbers.includes(i))) answer += i;
//   }

//   return answer;
// }

function solution(numbers) {
  return 45 - numbers.reduce((a, b) => a + b, 0);
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
console.log(solution([5, 8, 4, 0, 6, 7, 9]));