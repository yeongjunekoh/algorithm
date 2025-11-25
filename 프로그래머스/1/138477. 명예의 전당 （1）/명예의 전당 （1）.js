function solution(k, score) {
    var answer = [];
    var top = [];
    
    score.forEach((item, index) => {
        if(index >= k) {
            if((top[0] || 0) < item) top[0] = item;
        } else {
            top.push(item);
        }
        top.sort((a,b) => Number(a) < Number(b) ? -1 : 1);
        answer.push(top[0]);
    })
    
    return answer;
}