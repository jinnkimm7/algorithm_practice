function solution(s) {
  const len = s.length;
  if (len === 4 || len === 6) {
    return s.split('').every(e => !isNaN(e));
  } else {
    return false;
  }
}

console.log(solution("a234"));
console.log(solution("1234"));
