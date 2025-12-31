function solution(a, d, included) {
    return included.reduce((acc, cur, index) => {
        if(cur) return acc + a + d * index;
        else return acc
    }, 0);
}