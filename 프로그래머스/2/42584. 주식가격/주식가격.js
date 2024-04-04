/*
    문제 설명
    01. 초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수
    02. 가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 solution 함수
*/
function solution(prices) {
    let answer = new Array(prices.length).fill(0);
    let stack = [];

    for (let i = 0; i < prices.length; i++) {
        while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
            let index = stack.pop();
            answer[index] = i - index;
        }
        stack.push(i);
    }

    while (stack.length > 0) {
        let index = stack.pop();
        answer[index] = prices.length - 1 - index;
    }

    return answer;
}


/*
    시간초과 솔류션

    function solution(prices) {
        var answer = [];

        while(prices.length > 0){
            const currentPrice = prices.shift();
            const lowerPriceIndex = prices.findIndex((item) => item < currentPrice);

            if(lowerPriceIndex < 0) answer.push(prices.length);
            else answer.push(lowerPriceIndex + 1);
        }


        return answer;
    }
*/