function solution(arr, divisor) {
  let answer = arr.filter((val) => val % divisor === 0);
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

console.log(solution([5, 9, 7, 10], 5));
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([3, 2, 6], 10));