// function solution(t, p) {
//   let answer = 0;
//   const pLen = p.length;
//   const limit = t.length - pLen;
//   const pBig = BigInt(p);

//   for (let i = 0; i <= limit; i++) {
//     const subBig = BigInt(t.slice(i, i + pLen));
//     if (subBig <= pBig) answer++;
//   }

//   return answer;
// }

function solution(t, p) {
    var answer = 0;
    var i = 0;
    
    while (i <= t.length - p.length) {
        const currentNumber = Number(t.slice(i, i + p.length));
        if(currentNumber<=Number(p)) answer++;
        i++;
    }
    
    return answer;
}
