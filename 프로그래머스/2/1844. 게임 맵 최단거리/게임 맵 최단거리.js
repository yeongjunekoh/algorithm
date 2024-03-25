/*
    문제 설명
    01. ROR 게임은 두 팀으로 나누어서 진행하며, 상대 팀 진영을 먼저 파괴하면 이기는 게임
    02. 각 팀은 상대 팀 진영에 최대한 빨리 도착하는 것이 유리
    03. 검은색 부분은 벽으로 막혀있어 갈 수 없는 길이며, 흰색 부분은 갈 수 있는 길
    04. 캐릭터가 움직일 때는 동, 서, 남, 북 방향으로 한 칸씩 이동하며, 게임 맵을 벗어난 길은 갈 수 없습니다.
    05. 게임 맵의 상태 maps가 매개변수로 주어질 때, 
    06. 캐릭터가 상대 팀 진영에 도착하기 위해서 지나가야 하는 칸의 개수의 최솟값을 return 하도록 solution 함수를 완성
    07. 단, 상대 팀 진영에 도착할 수 없을 때는 -1을 return 
    
    제한사항
    01. maps는 n x m 크기의 게임 맵의 상태가 들어있는 2차원 배열
    02. n과 m은 각각 1 이상 100 이하의 자연수
    03. n과 m은 서로 같을 수도, 다를 수도 있지만, n과 m이 모두 1인 경우는 입력으로 주어지지 않습니다.
    04. maps는 0과 1로만 이루어져 있으며, 0은 벽이 있는 자리, 1은 벽이 없는 자리를 나타냅
    05. 처음에 캐릭터는 게임 맵의 좌측 상단인 (1, 1) 
    06. 상대방 진영은 게임 맵의 우측 하단인 (n, m) 위치
    
    Solution - DFS
*/
function solution(maps) {
    const width = maps[0].length;
    const height = maps.length;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]; // 동, 서, 남, 북
    
    const queue = [[0, 0, 1]]; // 시작 위치와 이동 횟수(1)를 큐에 추가
    const visited = new Array(height).fill(null).map(() => new Array(width).fill(false)); // 방문 여부를 저장할 배열

    while (queue.length > 0) {
        const [x, y, count] = queue.shift(); // 큐에서 좌표와 이동 횟수를 가져옴

        if (x === width - 1 && y === height - 1) { // 목적지에 도착한 경우
            return count; // 이동 횟수를 반환
        }

        for (const [dx, dy] of directions) { // 네 방향을 탐색
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && nx < width && ny >= 0 && ny < height && maps[ny][nx] === 1 && !visited[ny][nx]) {
                visited[ny][nx] = true; // 방문 여부를 표시
                queue.push([nx, ny, count + 1]); // 다음 위치와 이동 횟수를 큐에 추가
            }
        }
    }

    return -1; // 도착할 수 없는 경우
}

/*
function solution(maps) {
    var answer = Infinity;
    var width = maps[0].length;
    var height = maps.length;
    
    const searchRoad = (currentX, currentY, prevArray) => {
        if(maps[currentY][currentX] == 0) return; // 간 길이 막혀있을 경우 return
        
        const arrived = currentX == width - 1 && currentY == height - 1;
        
        if(arrived){
            if(answer > prevArray.length + 1) answer = prevArray.length + 1;
            return;
        }
        
        const nextStepArr = [[currentX + 1, currentY], [currentX - 1, currentY], [currentX, currentY + 1], [currentX, currentY - 1]];

        nextStepArr.forEach((next) => {
            if(next[0] >=width || next [1] >= height || next[0] < 0 || next[1] <0) return;
            if(prevArray.findIndex(prev => prev[0] === next[0] && prev[1] === next[1]) < 0){
                searchRoad(next[0], next[1], [...prevArray, [currentX, currentY]]);
            }
        });
        
        return;
    }
    
    searchRoad(0,0, []);
    
    return answer == Infinity ? -1: answer;
}
*/