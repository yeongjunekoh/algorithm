function solution(code) {
    var answer = code.replaceAll("1","").split("").filter((val, idx)=> idx%2 === 0).join("");
    return answer === '' ? 'EMPTY': answer;
}