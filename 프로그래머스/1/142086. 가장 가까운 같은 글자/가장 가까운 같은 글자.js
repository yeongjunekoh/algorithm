function solution(s) {
  const answer = [];
  const lastIndexMap = {};

  [...s].forEach((ch, i) => {
    if (lastIndexMap[ch] === undefined) {
      answer.push(-1);
    } else {
      answer.push(i - lastIndexMap[ch]);
    }
    lastIndexMap[ch] = i;
  });

  return answer;
}