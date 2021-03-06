//내 풀이
// function solution(s) {
//   let str = s.toLowerCase();
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'p') count++;
//     else if (str[i] === 'y') count--;
//   }

//   return count === 0 ? true : false;
// }

//다른 사람 풀이
// function solution(s) {
//   return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
// }

function solution(s) {
  const p = s.split('').filter(v => v === 'p' || v === 'P');
  const y = s.split('').filter(v => v === 'y' || v === 'Y');
  return p.length === y.length;
}

console.log(solution("pPoooyY")); //true
console.log(solution("Pyy")); //false
