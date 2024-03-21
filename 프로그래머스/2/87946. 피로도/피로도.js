/*
    문제 설명
    01. 피로도 시스템(0 이상의 정수로 표현합니다)
    02. 일정 피로도를 사용해서 던전을 탐험
    03. 던전마다 탐험을 시작하기 위해 필요한 "최소 필요 피로도"와 던전 탐험을 마쳤을 때 소모되는 "소모 피로도"
        ex. "최소 필요 피로도"가 80, "소모 피로도"가 20인 던전을 탐험하기 위해서는 유저의 현재 남은 피로도는 80 이상 이어야 하며, 던전을 탐험한 후에는 피로도 20이 소모
    04. 하루에 한 번씩 탐험할 수 있는 던전이 여러개 있는데, 한 유저가 오늘 이 던전들을 최대한 많이 탐험
    05. 유저의 현재 피로도 k
    06. 각 던전별 "최소 필요 피로도", "소모 피로도"가 담긴 2차원 배열 dungeons 가 매개변수
    07. 유저가 탐험할수 있는 최대 던전 수를 return 하도록 solution 함수
    
    해결책
    01. DFS로 풀면 될 것같아요
    02. BFS는 어떤가요
*/

function solution(k, dungeons) {
    let answer = 0;
    let visited = new Array(dungeons.length).fill(false);


    function DFS(k, count) {

        for(let i=0; i<dungeons.length; i++) {
            if(k >= dungeons[i][0] && !visited[i]) {
                // 방문 체크
                visited[i] = true;
                DFS(k-dungeons[i][1], count + 1);

                // 방문 해제
                // dfs가 다 끝났을 때에 방문 노드를 false해주지 않으면 다른 배열에서 돌 때 true여서 다른 배열이 진행하지 못한다.
                visited[i] = false; 
            }
        }

        answer = Math.max(answer, count);
    }

    DFS(k, 0);

    return answer;
}

// function solution(k, dungeons) {
//     var answer = -1;

//     const DFS = (prevArray) => {
//         if(prevArray.length > dungeons.length) return; // 총 던전의 길이 보다 크면 return;
//         if(prevArray.map((item) => dungeons[item][1]).reduce((a,b) => a+b,0) > k) return; //소모한 값이 k보다 크면 return;
//         if(prevArray.length  > answer) answer = prevArray.length; //지나온 길이가 answer보다 크면 answer에 할당.
        
//         dungeons.forEach((item, index) => {
//             if(prevArray.findIndex((item) => item == index) < 0){
//                 DFS([...prevArray, index]);
//             }
//         });
        
//         // dungeons.filter((_, idx) => prevArray.findIndex((item) => item == idx) < 0).forEach((_, index) => DFS([...prevArray, index]));
        
//     };
    
//     dungeons.forEach((item, index) => {
//         DFS([index], index.length); // 방문한 index와 길이 제공
//     })
    
//     return answer;
// }
