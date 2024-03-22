// 모든 경우의 수: 5 + 5*5 + 5*5*5 + 5*5*5*5 + 5*5*5*5*5
// "I"인 경우: 2 + 2*5 + 2*5*5 + 2*5*5*5 + 2*5*5*5*5
// "EIO"인 경우: 1 + 1*5 + 1*5*5 + 1*5*5*5 + 1*5*5*5*5 + 1*2 + 1*2*5 + 1*2*5*5 + 1*2*5*5*5 + 1*1*3 + 1*1*3*5 + 1*1*3*5*5 + 3

function solution(word) {
    const alphabets = ['A', 'E', 'I', 'O', 'U'];
    let answer = 0;
    
    [...word].forEach((alphabet, index) => {
        let count = index;
        let prevAddNumber = 0;
        const alphabetNumber = alphabets.findIndex((item) => item == alphabet);
        
        const addNumber = (num) => {
            answer += num;
            prevAddNumber = num;
        }
        
        console.log("BEFORE_ADD", alphabet, count, index, prevAddNumber, alphabetNumber, prevAddNumber == 0);
        
        while(count < alphabets.length){
            if(prevAddNumber == 0){
                addNumber(alphabetNumber);
            } else {
                addNumber(prevAddNumber * 5);
            }
            
            count++;
        }
        answer ++;
        console.log("END_ADD", alphabet, count, index, prevAddNumber, alphabetNumber, answer);
        
    });
    
    return answer;
}
