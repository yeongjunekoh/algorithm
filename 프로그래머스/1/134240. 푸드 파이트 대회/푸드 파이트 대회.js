function solution(food) {
    const foodString = food.reduce((acc, cur, index) => {
        const foodNumberString = String(index).repeat(Math.floor(cur/2));
        return acc + foodNumberString;
    } ,'');
    
    return foodString + '0' + [...foodString].reverse().join('');
}