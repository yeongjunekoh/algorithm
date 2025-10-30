function solution(video_len, pos, op_start, op_end, commands) {
  const toSec = (s) => {
    const [m, ss] = s.split(":").map(Number);
    return m * 60 + ss;
  };
  const toStr = (t) => {
    const m = Math.floor(t / 60);
    const s = t % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const V = toSec(video_len);
  const OP_S = toSec(op_start);
  const OP_E = toSec(op_end);

  const skipOpening = (t) => (OP_S <= t && t <= OP_E ? OP_E : t);

  let t = skipOpening(toSec(pos)); // 시작 시점도 즉시 오프닝 스킵

  for (const cmd of commands) {
    if (cmd === "next") t = Math.min(t + 10, V);
    else if (cmd === "prev") t = Math.max(t - 10, 0);
    t = skipOpening(t); // 이동 후 오프닝 구간이면 종료 시점으로 점프
  }
  return toStr(t);
}
