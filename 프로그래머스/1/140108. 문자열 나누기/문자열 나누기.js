function solution(s) {
    var answer = 0;
    let x = '';
    let same = 0;
    let diff = 0;
    
    [...s].forEach((item,index) => {
       if(x === '') {
           x = item;
           same = 1;
            if(index >= s.length -1 ) answer++;
       } else {
        if(x === item) same++;
        else diff++;
        
        if(same === diff) {
            answer++;
            x='';
            same = 0;
            diff = 0;
        }else {
            if(index >= s.length -1 ) answer++;
        }
           
       }
         
    })
    
    return answer;
}