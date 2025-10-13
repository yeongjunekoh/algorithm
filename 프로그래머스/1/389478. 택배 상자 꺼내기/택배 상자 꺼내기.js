function solution(n, w, num) {
  // 총 층수(행): 아래층이 0행
  const rows = Math.ceil(n / w);

  // num의 행 r, 행 내 증가순 인덱스 p
  const r = Math.floor((num - 1) / w);
  const p = (num - 1) % w;

  // 물리적 열 c: 짝수행 L→R, 홀수행 R→L
  const c = (r % 2 === 0) ? p : (w - 1 - p);

  // r 위의 "완전 채워진 행" 개수: (rows-2) down to (r+1)
  const fullAbove = Math.max(0, (rows - 2) - r);

  // 맨 위 행(rows-1)에 같은 열의 칸이 실제 존재하는지 확인
  const topRow = rows - 1;
  let topExists = 0;
  if (topRow > r) {
    const localIdxOnTop = (topRow % 2 === 0) ? c : (w - 1 - c);
    const numOnTop = topRow * w + localIdxOnTop + 1;
    if (numOnTop <= n) topExists = 1;
  }

  // 자신 포함
  return 1 + fullAbove + topExists;
}