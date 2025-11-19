function solution(s) {
    var answer = [];
    var stringMap = {};
    
    [...s].forEach((item, index) => {
        const lengthOfItem = stringMap[item]?.length
        if(!lengthOfItem) {
            answer.push(-1);
            stringMap[item] = [index];
        } else {
            answer.push(index - stringMap[item][lengthOfItem -1]);
            stringMap[item].push(index);
        }
    })
    return answer;
}