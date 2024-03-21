/*
    Problem
    한자리 숫자가 적힌 종이 조각이 흩어져있습니다.
    흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.
    각 종이 조각에 적힌 숫자가 적힌 문자열 numbers
    종이 조각으로 만들 수 있는 소수가 몇 개인지 return
*/

function solution(numbers) {
    // 변수 초기화
    let answer = 0;  // 소수의 개수를 세는 변수
    const numArr = numbers.split("");  // 입력 문자열을 문자 배열로 변환
    const n = numArr.length;  // 입력 배열의 길이
    const ch = Array.from({ length: n }, () => 0);  // 사용된 숫자를 추적하는 배열
    let temp = Array.from({ length: n }, () => 0);  // 현재 조합을 저장하는 임시 배열
    const tempSet = new Set();  // DFS 중 생성된 고유한 숫자를 저장하는 세트

    // 숫자가 소수인지 확인하는 함수
    function isPrime(number) {
        if (number <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }

    // 조합을 생성하는 깊이 우선 탐색(DFS) 함수
    function DFS(depth, length) {
        if (depth === length) {  // 원하는 길이의 조합이 완성된 경우
            const num = parseInt(temp.slice(0, length).join(""));  // 조합을 숫자로 변환
            if (num !== 0 && !tempSet.has(num) && isPrime(num)) {
                tempSet.add(num);  // 중복을 피하기 위해 숫자를 세트에 추가, 0으로 시작하는 숫자 배제 ex)0123 -> 123
                answer++;  // 소수 개수 증가
            }
        } else {
            for (let i = 0 ; i < n ; i++) {
                if (ch[i] === 0) {    
                    ch[i] = 1;  // 현재 숫자를 사용된 것으로 표시
                    temp[depth] = numArr[i];  // 현재 숫자를 임시 배열에 추가
                    DFS(depth + 1, length);  // 재귀적으로 다음 깊이로 이동
                    ch[i] = 0;  // 백트래킹: 다음 반복을 위해 현재 숫자를 사용되지 않은 것으로 표시
                }
            }
        }
    }

    // 다양한 길이의 조합을 생성하기 위한 반복문
    for (let length = 1; length <= n ; length++) {        
        DFS(0, length);  // 현재 길이로 DFS 시작
    }

    return answer;  // 최종적으로 센 소수의 개수 반환
}




/* MY SOLUTION
function solution(numbers) {
    let len = 0;                     // 숫자들의 총 길이
    let numberCaseArray = [];           // 만들 수 있는 모든 숫자의 경우의 수
    const numberArray = [...numbers];   // 문자열을 한자리 숫자의 배열로 변경
    
    var answer = [];                    // 소수만 배열에 담기도록
    
    // 사용할 수 있는 숫자들의 배열을 제공하는 함수
    const canUseNumberArray = (usedNumber) => {
        var usedNumberIndex = [];
        
        //numberArray에서 사용된 숫자의 index를 앞단에서부터 구함 (중복의 경우 대비)
        usedNumber.forEach((usedItem) => {
            const idx = numberArray.findIndex((item) => item == usedItem);
            if(idx >= 0) usedNumberIndex.push(idx);
        });
        // 추후 배열을 합치기 위해 순서대로 정렬
        usedNumberIndex.sort();
        
        var filteredArray = [];
        console.log("BEFORE_FIND_NUMBER", usedNumber,numberArray, filteredArray);
        // 사용할 수 있는 숫자만 filteredArray에 담는 작업 진행
        usedNumberIndex.map((item, index) => {
            if(index == 0){
                // 길이가 1개인 경우
                if(index == usedNumberIndex.length - 1) {
                    return filteredArray.push(...numberArray.slice(0,item), ...numberArray.slice(item + 1));
                }
                return filteredArray.push(...numberArray.slice(0,item));
            } else if(index == usedNumberIndex.length - 1){
                // 마지막 값인 경우
                return filteredArray.push(...numberArray.slice(usedNumberIndex[index - 1] + 1,item), ...numberArray.slice(item + 1));
            } else {
                return filteredArray.push(...numberArray.slice(usedNumberIndex[index - 1] + 1,item));
            }
        });
        
        console.log("END_FIND_NUMBER", usedNumber,numberArray, filteredArray, [filteredArray.join("")]);
        
        return [filteredArray.join("")];
    }
    
    // 모든 숫자의 경우의 수를 numberCaseArray에 담기 위함. BFS 실행
    while (len < numbers.length) {
        // 길이가 0인 경우 모든 숫자가 한 번씩 들어가게 함.
        if(len == 0) {
            numberCaseArray.push(...numberArray);
        } 
        // 길이가 0이 아닌 경우 사용할 수 있는 숫자들을 구하고
        // numberCaseArray에서 길이가 length인 값들만 가져와서 숫자들을 조합하면 다음 length의 값들이 나오게 된다.
        else {
            // 길이가 length인 Case Number들만 가져오기
            const filteredCase = numberCaseArray.filter((numberCase) => numberCase.length == len);
            
            // 각 caseNumber 별로 미사용중인 number를 구하여 값을 넣어줌.
            filteredCase.forEach((caseNumber) => {
                var usedNumber = [...caseNumber];
                var canUseNumbers = canUseNumberArray(usedNumber);
                
                canUseNumbers.forEach((item) => numberCaseArray.push(String(caseNumber) + String(item)));
            })
        }
        
        len++;
    }
    
    // 소수인지 검증하는 함수
    const verifyNumber = (number) => {
        // 1이나 0이라면 소수에 포함되지 않음
        if(number == 1 || number == 0) { 
            return;
        }
        
        // 2부터 시작해서 나눌 수 있는지 검토
        let divider = 2;
        
        //divider가 number보다 크거나 같을 때까지 반복
        while (divider < number) {
            // 나누기 값이 0이라면 나눠지는 것이므로 소수가 아님.
            if(number % divider == 0) {
                break;
                return;
            }
            divider ++;
        }
        
        // 위의 divider로부터 나눠지는 값이 아니라면 무조건 소수임.
        answer.push(number);
    }
    
    // 중복 제거
    const uniqueCaseArray = new Set(numberCaseArray);
    
    console.log("BEFORE_VERIFY", numberCaseArray, uniqueCaseArray)
    
    // 모든 경우의 수를 검증
    Array.from(uniqueCaseArray).forEach((number) => verifyNumber(number));
    
    console.log("END_VERIFY", numberCaseArray, uniqueCaseArray, answer);
    return answer.length;
}

*/
