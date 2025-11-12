function solution(keymap, targets) {
  const A = 'A'.charCodeAt(0);
  const cost = Array(26).fill(Infinity);

  // 전처리: 문자별 최소 클릭수
  for (const key of keymap) {
    for (let i = 0; i < key.length; i++) {
      const idx = key.charCodeAt(i) - A;
      // 대문자만 주어진다고 했으므로 범위 체크 생략 가능
      if (i + 1 < cost[idx]) cost[idx] = i + 1;
    }
  }

  // 계산: 각 target 합산
  const answer = [];
  for (const t of targets) {
    let sum = 0;
    let possible = true;
    for (let i = 0; i < t.length; i++) {
      const idx = t.charCodeAt(i) - A;
      const c = cost[idx];
      if (c === Infinity) { possible = false; break; }
      sum += c;
    }
    answer.push(possible ? sum : -1);
  }
  return answer;
}
