/*
    문제 설명
    01. 컴퓨터 시스템의 자원을 효율적으로 관리
    02. 운영체제가 다음 규칙에 따라 프로세스를 관리할 경우 특정 프로세스가 몇 번째로 실행되는지 알아내면 됨.
    
    규칙
    1. 실행 대기 큐(Queue)에서 대기중인 프로세스 하나를 꺼냅니다.
    2. 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
    3. 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.
      3.1 한 번 실행한 프로세스는 다시 큐에 넣지 않고 그대로 종료됩니다.
      
    Props
    01. 실행 대기 큐(Queue)에 있는 프로세스의 중요도가 순서대로 담긴 배열 priorities
    02. 몇 번째로 실행되는지 알고싶은 프로세스의 위치를 알려주는 location
*/
function solution(priorities, location) {
    var currentIndex = location;
    var answer = 0;
    
    while(priorities.length > 0) {
        console.log()
        const currentProcess = priorities.shift();
        const highestPriority = Math.max(...priorities);
        
        const shouldStop = currentIndex == 0 && currentProcess >= highestPriority;
        
        if(shouldStop) {
            answer ++;
            break;
        }
        else if(currentIndex == 0) {
            currentIndex = priorities.length;
            priorities.push(currentProcess);
        }
        else if(currentProcess >= highestPriority) {
            currentIndex--;
            answer++;
        } else {
            currentIndex--;
            priorities.push(currentProcess);
        }
    }
    
    return answer;
}