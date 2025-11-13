

function solution(s, skip, index) {
    const handleAlphabetCode = (code) => {
        let currentCode = code;
        if(currentCode > 'z'.charCodeAt()) currentCode = currentCode - 'z'.charCodeAt() + 'a'.charCodeAt() - 1;

        return currentCode;
    }
    
    const skipCode = [...skip].map(alphabet => alphabet.charCodeAt());
    const alphabetArray = [...s].map(alphabet => {
        var alphabetCode = alphabet.charCodeAt();
        var plus = 0;
        
        while(plus < index) {
            alphabetCode = handleAlphabetCode(alphabetCode + 1);
            if(!skipCode.includes(alphabetCode)) plus++;
        }
        
        return String.fromCharCode(alphabetCode);
    });
    
    return alphabetArray.join('');
}