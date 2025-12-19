function solution(number, limit, power) {
    var answer = 0;
    
    for(let i = 1; i <= number; i++){
        let divisor = 0;
        
        for (let divider = 1; divider <= Math.sqrt(i); divider++){
            if(i%divider === 0) {
                if(divider*divider === i) divisor++;
                else divisor += 2;
            }
        }
        answer += divisor > limit ? power : divisor;
    }
    
    return answer;
}