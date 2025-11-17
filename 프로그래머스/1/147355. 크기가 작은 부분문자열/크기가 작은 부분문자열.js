function solution(t, p) {
  let answer = 0;
  const pLen = p.length;
  const limit = t.length - pLen;
  const pBig = BigInt(p);

  for (let i = 0; i <= limit; i++) {
    const subBig = BigInt(t.slice(i, i + pLen));
    if (subBig <= pBig) answer++;
  }

  return answer;
}
