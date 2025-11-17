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