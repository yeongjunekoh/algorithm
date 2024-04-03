/*
    문제 설명
    01. 전화번호부에 적힌 전화번호 중, 한 번호가 다른 번호의 접두어인 경우가 있는지 확인
    02. 전화번호부에 적힌 전화번호를 담은 배열 phone_book이 매개변수
*/
function solution(phone_book) {
    var answer = true;
    
    phone_book.sort();

    for(var i = 0; i < phone_book.length - 1; i++) {
        if(phone_book[i+1].startsWith(phone_book[i])) {
            answer = false;
            break;
        }
    }

    return answer;
}