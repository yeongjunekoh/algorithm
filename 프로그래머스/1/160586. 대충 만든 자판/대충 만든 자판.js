function solution(keymap, targets) {
    const MAX_LENGTH_OF_KEY_MAP = 101;
    var answer = [];
    
    targets.forEach((target) => {
        let numberOfPress = 0;
        
        for(const alphabet of target) {
            let min = MAX_LENGTH_OF_KEY_MAP;
            keymap.forEach((key) => {
                const keyIndex = key.indexOf(alphabet);
                if(keyIndex >= 0) min = Math.min(min, keyIndex + 1);
            })
            if(min === MAX_LENGTH_OF_KEY_MAP) {
                numberOfPress = -1;
                break;
            }
            numberOfPress += min;
        }
        
        answer.push(numberOfPress);
    })
    return answer;
}