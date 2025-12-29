function solution(code) {
    var answer = '';
    let mode = 0;
    code.split('').forEach((char, index) => {
        if(mode == 0) {
            if(char === '1'){
                mode = 1;
                return;
            }
            if(index % 2 === 0){
                answer = answer + char;
            }
        } else {
            if(char === '1'){
                mode = 0;
                return;
            }
            if(index % 2 === 1){
                answer = answer + char;
            }
        }
    })
    return answer === '' ? 'EMPTY': answer;
}