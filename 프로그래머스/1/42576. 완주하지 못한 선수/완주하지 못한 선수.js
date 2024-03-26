/*
    문제 설명
    01. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주
    02. 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion
    03. 완주하지 못한 선수의 이름을 return 하도록 solution 함수
    
    제한사항
    01. 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
    02. completion의 길이는 participant의 길이보다 1 작습니다.
    03. 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
    04. 참가자 중에는 동명이인이 있을 수 있습니다.
*/

var solution=(participant,completion)=>participant.find(name=>!completion[name]--,completion.map(name=>completion[name]=(completion[name]|0)+1));

/*
    배운 것
    01. find 메서드에서는 completion.map 메서드가 먼저 실행이 된다. -> find(callbackFn, thisArg) 참조
    02. 배열 또한 객체로 사용할 수 있기에 키:값 쌍으로 보관할 수 있다. 맵핑을 작업하게 돠면 다음과 같이 출력되게 된다.['cake', 'ball', 'sauce', 'cake', cake: 2, ball: 1, sauce: 1]
    03. 이후 completion[name]가 0/undefinded이면 true를 반환하고 1이면 false를 반환할 수 있도록 해준다.
    04. '--'는 후치이기에 03의 참, 거짓 판별 이후 값이 1 줄어들게 된다.
*/


/*
function solution(participant, completion) {
    var answer = '';
    var complete = {};
    
    participant.forEach((item) => {
        if(complete[item]) complete[item] ++;
        else complete[item] = 1;
    });
    
    completion.forEach((item) => {
        complete[item] -= 1;
    });
    
    for(const key in complete) {
        if(complete[key] != 0) {
            answer = key;
            break;
        }
    }
    
    return answer;
}
*/