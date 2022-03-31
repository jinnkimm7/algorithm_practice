// [문제 설명]
// 선생님이 조회 시간에 출석부를 부르고 있습니다.
// 학생들의 번호를 다 호명하고 결석한 학생들을 알아내고 있습니다.
// 선생님은 헷갈려서 몇 명의 번호를 다른 번호로 호명했습니다.
// 이때, 선생님이 잘못 호명한 학생들의 원래 번호를 출력하는 함수, solution을 완성해주세요.

// 예를 들어, 선생님이 호명한 학생들의 번호 배열 nums가 [1, 2, 3, 4, 6, 6, 6] 있을 때 잘못 호명한 학생들의 원래 번호는 [5, 7]입니다.

// [제한 사항]

// 한 반의 학생들은 최대 100명입니다.
// 선생님이 잘못 호명한 학생들의 원래 번호를 출력하므로, 출력되는 학생들의 번호는 배열의 길이를 넘을 수 없습니다.
// [입력 형식]

// nums는 선생님이 호명한 학생들의 번호 배열입니다.
// [출력 형식]

// 선생님이 잘못 호명한 학생들의 원래 번호 배열을 출력합니다.

// 내 풀이
// function solution(nums) {
//   let wrongNums = [];
//   for (let i = 0; i < nums.length; i++) {
//     if ((i + 1) !== nums[i]) {
//       wrongNums.push(i + 1);
//     }
//   }
//   return wrongNums
// }

//다른 사람 풀이
function solution(nums) {
  let result = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      result.push(i);
    }
  }

  return result;
}


console.log(solution([1, 2, 3, 4, 6, 6, 6]));
console.log(solution([1, 3, 4, 8]));
