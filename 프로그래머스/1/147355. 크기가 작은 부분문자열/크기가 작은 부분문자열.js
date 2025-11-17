function solution(t, p) {
  let answer = 0;
  const pLen = p.length;
  const limit = t.length - pLen;

  for (let i = 0; i <= limit; i++) {
    const sub = t.slice(i, i + pLen); // 길이 pLen의 부분 문자열
    // 같은 길이의 숫자 문자열이므로 사전순 비교 == 수 크기 비교
    if (sub <= p) answer++;
  }

  return answer;
}