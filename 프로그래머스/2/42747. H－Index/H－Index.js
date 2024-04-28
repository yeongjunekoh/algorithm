/*
    문제 설명
    01. H-Index(h)는 과학자의 생산성과 영향력을 나타내는 지표
    02. H-Index는 다음과 같이 구합니다.
    02-1. 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index
    
    03. 어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수
    04. 이 과학자의 H-Index를 return 하도록 solution 함수
*/

function solution(citations) {
    var answer = 0;
    
    citations.sort((a,b) => {
        return b-a
    });
    
    for(var i =0; i < citations.length; i++) {
        if(citations[i] > i) {
            answer++;
        }
        else break;
    }
    
    return answer;
}