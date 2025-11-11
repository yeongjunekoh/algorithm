function solution(n, m, section) {
    var answer = 0;
    let current = 0;
    while(current < section.length) {
        const maxLength = section[current] + m;
        const index = section.findIndex((item) => item >= maxLength);
        
        if(index < 0) {
            answer += 1;
            break;
        }
        current = index;
        answer += 1;
    }
    return answer;
}