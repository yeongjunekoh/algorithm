function solution(brown, yellow) {
    let width = 3;
    var answer = [];
    
    while(width < brown/2){
        const yellowWidth = width - 2;
        
        if(yellow % yellowWidth == 0){
            if(brown/2 == width + yellow/yellowWidth) {
                answer = [width, yellow/yellowWidth + 2].sort((a,b) => b-a);
                break;
            }
        }

        width++;
    }
    
    return answer;
}