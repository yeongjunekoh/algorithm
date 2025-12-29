function solution(k, m, score) {
    var answer = 0;
    const numberOfBox = Math.floor(score.length / m);
    const sortedScore = score.sort((a,b) => b-a);
    
    for(let i = 0; i < numberOfBox; i+=1){
        answer += sortedScore[i*m + m - 1] * m;
    }
    
    return answer;
}