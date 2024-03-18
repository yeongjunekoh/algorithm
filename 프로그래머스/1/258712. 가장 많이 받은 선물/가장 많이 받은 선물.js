/* Note
    - 당신의 친구들이 이번 달까지 선물을 주고받은 기록을 바탕으로 다음 달에 누가 선물을 많이 받을지 예측
    - A,B 간에 선물 교환이 이뤄졌다면, 다음달에는 더 적게 받은 사람이 받음.
    - A,B 간에 선물 교환 수가 없거나 동등하면, 선물 지수가 더 큰 사람이 선물 하나 받음
    - 선물 지수도 같다면 둘다 받지 않음.
    - 선물 지수: 이번 달까지 자신이 친구들에게 준 선물의 수에서 받은 선물의 수를 뺀 값
    
    answer: 선물을 가장 많이 받을 친구가 받을 선물의 수
    
    - 친구들의 이름을 담은 1차원 문자열 배열 friends
    - 이번 달까지 친구들이 주고받은 선물 기록을 담은 1차원 문자열 배열 gifts
    
    Solution 01
    - hashmap 형태로 변환
    - 그 이후, 선물 교환 수와 선물 지수에 따른 수 Count
    
    객체 형태
    {
      a: {
        total: 0,
        a:0,
        ...
      }
    }
    
    Solution 02
*/

function solution(friends, gifts) {
    const nextMonthGiftArray = [];
    const totalGiftArray = [];
    const giftGiverObj = {};
    const totalReceiveArray = [];
    
    // 초기 객체 설정
    friends.forEach((item, index) => {
        giftGiverObj[item] = {};
        friends.forEach((data) => giftGiverObj[item][data] = 0);
        nextMonthGiftArray[index] = 0;
        totalGiftArray[index] = 0;
        totalReceiveArray[index] = 0;
    });
    
    // Giver에 따른 숫자 할당
    gifts.forEach((item) => {
        // 띄어쓰기 별 Giver와 Taker 분류
        const giftExchange = item.split(" ");
        // giver 객체 할당
        const giver = giftGiverObj[giftExchange[0]];
        // giverIndex 할당
        const giverIndex = friends.findIndex(item => item == giftExchange[0]);
        const receiverIndex = friends.findIndex(item => item == giftExchange[1]);
        
        // Giver의 Receiver에 숫자 할당
        giver[giftExchange[1]] += 1;
        // Giver의 totalGift 숫자 할당
        totalGiftArray[giverIndex] += 1;
        totalReceiveArray[receiverIndex] +=1; 
    });

    
    // 다음달에 받을 선물 수 카운트
    friends.forEach((item, index) => {
        const keys = Object.keys(giftGiverObj[item]);
        
        keys.forEach((keyItem) => {
            const giverIndex = index;
            const receiverIndex = friends.findIndex(friend => friend == keyItem);

            if(giftGiverObj[item][keyItem] > giftGiverObj[keyItem][item]){
                nextMonthGiftArray[index] += 1;
            }
            else if(giftGiverObj[item][keyItem] == giftGiverObj[keyItem][item]){
                if(totalGiftArray[giverIndex]-totalReceiveArray[giverIndex] > totalGiftArray[receiverIndex]-totalReceiveArray[receiverIndex]){
                        nextMonthGiftArray[index] += 1;
                }
            }
                
        });
    })
    
    return Math.max(...nextMonthGiftArray);
}