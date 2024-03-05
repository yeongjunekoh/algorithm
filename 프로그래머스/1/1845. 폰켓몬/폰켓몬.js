/*
    1. 자신의 연구실에 있는 총 N 마리의 폰켓몬 중에서 N/2마리를 가져가도 좋다
    2. 같은 종류의 폰켓몬은 같은 번호
    3. 폰켓몬의 종류 번호가 담긴 배열 nums가 매개변수
    
    최대한 많은 종류의 폰켓몬을 포함해서 N/2마리를 선택
    가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아, 그때의 폰켓몬 종류 번호의 개수를 return
    
    [풀이]
    01. 반복문을 통해, 폰켓몬 번호별 소유 개수를 센다.
    02. 중복을 제거하여 최대한 선택할 수 있는 개수를 나타낸다.
    
    이후, nums.length/2와 고유 개수를 비교하여 작은 것을 선택하면 된다.
    
    [LEARN]
    new Set(): Javascript에서 Set 객체를 이용하면 중복없는 데이터를 표현할 수 있습니다
    new Set().size: 배열에서 중복 제거한 값을 객체로 나타낼 수 있다.
*/
function solution(nums) {
    var uniqueNums = [];
    
    nums.forEach((item,idx) => {
        if(uniqueNums.findIndex(data => data === item) < 0) uniqueNums.push(item);
        return;
    })
    
    return Math.min(uniqueNums.length, nums.length/2);
    
    // return Math.min(new Set(nums).size, nums.length/2);
}