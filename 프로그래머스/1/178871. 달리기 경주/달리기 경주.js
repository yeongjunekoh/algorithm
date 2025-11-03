
function solution(players, callings) {
    const map = {};
    players.forEach((item, index) => map[item] = index);
    
    callings.forEach((item) => {
        const current = map[item];
        [players[current - 1], players[current]] = [players[current], players[current - 1]]
        
        map[players[current - 1]] = current - 1;
        map[players[current]] = current;
    });
    
    return players;
}

/**
* 시간초과 발생
* 1. players를 검색할때마다 players.length의 시간복잡도를 가짐.
* 2. 결과적으로 O(n^2)를 가짐.

function solution(players, callings) {
    var answer = players;

    callings.forEach((item) => {
        const currentIndex = players.findIndex(player => player === item);
        answer[currentIndex] = answer[currentIndex - 1];
        answer[currentIndex - 1] = item;
    });
    
    return answer;
}

*/