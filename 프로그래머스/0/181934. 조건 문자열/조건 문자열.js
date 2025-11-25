function solution(ineq, eq, n, m) {
    var answer = 0;
    if(eq === '=') {
        if(n === m) answer = 1;
    }
    if(ineq === '<') {
        if(n < m) answer = 1;
    }
    if(ineq === '>') {
        if(n > m) answer = 1;
    }
    
    return answer;
}