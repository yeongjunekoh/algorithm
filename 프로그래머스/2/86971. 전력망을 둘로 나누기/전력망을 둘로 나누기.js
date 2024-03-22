// GPT 솔루션 + 그래프 이론과 그리디 알고리즘을 통해 짬

function solution(n, wires) {
    // 그래프 생성
    const graph = new Array(n + 1).fill(null).map(() => []);

    // 그래프에 연결 정보 추가
    for (const [v1, v2] of wires) {
        graph[v1].push(v2);
        graph[v2].push(v1);
    }

    let answer = Infinity;

    // 재귀적으로 서브 트리의 노드 개수 계산
    const countNodes = (node, parent) => {
        let count = 1;
        for (const neighbor of graph[node]) {
            if (neighbor !== parent) {
                count += countNodes(neighbor, node);
            }
        }
        return count;
    };

    // 한 간선을 제거하여 두 서브 트리의 크기 차이의 최솟값 계산
    for (const [v1, v2] of wires) {
        const subtree1 = countNodes(v1, v2);
        const subtree2 = n - subtree1;
        answer = Math.min(answer, Math.abs(subtree1 - subtree2));
    }

    return answer;
}

/* BFS를 이용한 나의 솔루션 Test Case 01을 통과하지 못함.

01. 문제 해결 방식의 오류: 주어진 문제는 전력망을 두 개로 분할하여 송전탑의 개수를 최대한 비슷하게 맞추는 것입니다. 하지만 주어진 코드는 단순히 하나의 전선을 끊고, 두 전력망의 송전탑 개수의 차이를 구하는 것으로 문제를 해결하려고 합니다. 이 방식은 모든 가능한 전선을 하나씩 끊어보는 완전 탐색 방식으로는 문제를 해결할 수 없습니다.

02. 탐색 알고리즘의 오류: 주어진 코드에서는 너비 우선 탐색(BFS)을 사용하여 송전탑 간의 연결을 탐색하려고 합니다. 그러나 이 방식은 전력망을 적절히 분할하여 두 개의 전력망을 만들지 못합니다.

function solution(n, wires) {
    var answer = n;
    let count = 0;
    
    let netArray = [[],[]]; // 무조건 길이가 2개임
    
    const searchConnection = (startNode, array) => {
        let queue = [];
        let netIndex = 0;
        
        // 01. 탐색이 되면 queue에 들어가지 못함.
        // 02. 탐색이 안되는 경우에도 못들어감.
        // 03. 탐색이 안되면서, netArray의 길이가 0인경우에만 queue에 들어갈 수 있음.
        const inNetArray = netArray.filter((towers, index) => towers.includes(startNode)).length > 0;
        
        if(inNetArray) return;
        else if(netArray[0].length == 0) {
            netIndex=0;
            netArray[0].push(startNode);
            queue.push(startNode);
        }
        else if(netArray[1].length == 0) {
            netIndex=1;
            netArray[1].push(startNode);
            queue.push(startNode);
        }
        else return;
        
        while(queue.length > 0) {
            const searchNode = queue.shift();
            
            array.forEach((towers, index) => {
                if(towers.includes(searchNode)){
                    towers.forEach((tower) => {
                        if(!netArray[netIndex].includes(tower)){
                            netArray[netIndex].push(tower);
                            queue.push(tower);
                        }
                    })
                }
            })
        }
    }
    
    while(count < n) {
        // 모든 라인들을 한 번씩 끊어보기
        netArray = [[],[]];
        const filteredWires = wires.filter((_, wireIndex) => wireIndex != count);
        
        filteredWires.forEach((towers) => { // 끊은 Wire 외에 모든 선에서 연결된 tower들 보기
            towers.forEach((tower) => searchConnection(tower, filteredWires) )
        })
        
        // 이후 netArray 길이의 합이 n과 같은지 확인하기
        const net1 = (new Set(netArray[0])).size;
        const net2 = (new Set(netArray[1])).size;
        
        if(net1 + net2 == n){
            if(answer > (Math.max(net1, net2) - Math.min(net1, net2))) answer = Math.max(net1, net2) - Math.min(net1, net2);
        };
        
        count++;
    }
    
    return answer;
}

*/