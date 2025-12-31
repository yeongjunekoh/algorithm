function solution(food) {
    var answer = '';
    return food.reduce((acc, cur, index) => {
        const foodNumberString = String(index).repeat(Math.floor(cur/2));
        return acc.replace('0', foodNumberString + '0' + foodNumberString);
    } ,'0');
}