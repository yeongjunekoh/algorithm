/**
 * @param {string} s
 * @param {string} p
 * @return {boolean} result
 */

var isMatch = function(s, p) {
    var result = true;
    
    var inputIndex = 0;
    var patternIndex = 0;
    let starIdx = -1, pointer = -1;


    while (inputIndex < s.length){
        if(s[inputIndex] === p[patternIndex] || p[patternIndex] === '?'){
            patternIndex++;
            inputIndex++;
        } else if(p[patternIndex] === '*'){
            starIdx = patternIndex;
            pointer = inputIndex;
            patternIndex++;

        } 
	    else if (starIdx === -1) return false;
        else{
            patternIndex = starIdx + 1;
            inputIndex = pointer + 1;
            pointer = inputIndex;
        }
    }

    for (let idx = patternIndex; idx < p.length; idx++) {
        if (p[idx] !== "*") return false;
    }

    return result;
};
