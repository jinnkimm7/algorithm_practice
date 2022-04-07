/** 
우리나라의 화폐단위는 50000, 10000, 5000, 1000, 500, 100, 50, 10, 5, 1 원으로 이루어져 있습니다.
거스름돈 금액 A원이 입력 되었을때 해당 거스름돈을 만족하는 최소한의 화폐 개수를 리턴하는 함수를 작성하세요.

[입력]
거스름돈 금액 A

[출력]
최소한의 화폐 개수
*/

function solution(A) {
  let change = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 5, 1];
  let count = 0;
  for (let i = 0; i < change.length; i++) {
    while (change[i] <= A) {
      A = A - change[i];
      count++;
      if (A === 0) break;
    }
  }
  return count++;
}