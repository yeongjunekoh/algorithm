/*
    문제 설명
    01. 트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건넘
    02. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 함.
    03. 다리에는 트럭이 최대 bridge_length대 올라갈 수 있음.
    04. 다리는 weight 이하까지의 무게를 견딜 수 있음.
    05. 단, 다리에 완전히 오르지 않은 트럭의 무게는 무시
    
    Solution
    01. 시간을 측정하는 것이 주된 목적
    02. 
*/

function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let bridge_queue = [], weight_on_bridge = 0;
    
    // 다리 길이만큼 0으로 초기화된 배열 생성
    bridge_queue = Array(bridge_length).fill(0);
    
    while (bridge_queue.length > 0) {
        // 시간을 증가시키고, 다리의 첫 번째 트럭을 이동
        time++;
        weight_on_bridge -= bridge_queue.shift();
        
        // 다리에 트럭이 올라갈 수 있으면 트럭을 올림
        if (truck_weights.length > 0) {
            // 다음 트럭이 다리에 올라올 수 있다면
            if (weight_on_bridge + truck_weights[0] <= weight) {
                let truck = truck_weights.shift();
                bridge_queue.push(truck);
                weight_on_bridge += truck;
            } else {
                // 다음 트럭이 올라올 수 없다면, 0을 푸시하여 트럭의 진입을 지연
                bridge_queue.push(0);
            }
        }
    }
    
    return time;
}