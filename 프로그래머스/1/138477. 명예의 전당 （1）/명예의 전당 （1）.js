function solution(k, score) {
    var answer = [];
    var top = [];
    
    score.forEach((item, index) => {
        if(index >= k) {
            if((top[0] || 0) < item) top[0] = item;
        } else {
            top.push(item);
        }
        top.sort((a,b) => a - b);
        answer.push(top[0]);
    })
    
    return answer;
}