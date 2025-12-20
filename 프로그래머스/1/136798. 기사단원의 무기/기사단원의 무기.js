function solution(number, limit, power) {
    var answer = 0;
    
    for(let i = 1; i <= number; i++){
        let divisor = 0;
        const root = Math.floor(Math.sqrt(i));

        for (let divider = 1; divider <= root; divider++){
            if(i%divider === 0) {
                if(divider*divider === i) divisor++;
                else divisor += 2;
            }
        }
        answer += divisor > limit ? power : divisor;
    }
    
    return answer;
}