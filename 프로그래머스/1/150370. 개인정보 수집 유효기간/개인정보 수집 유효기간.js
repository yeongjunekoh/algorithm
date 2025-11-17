function solution(today, terms, privacies) {
    const toDays = (dateStr) => {
        const [y,m,d] = dateStr.split('.').map(Number);
        return y*12*28 + m*28 +d;
    }
    
    const todayDays = toDays(today);
    
    const termsMap = {};
    var answer = [];
    
    terms.forEach((item) => {
        const [term, period] = item.split(' ');
        termsMap[term] = Number(period);
    });
    
    privacies.forEach((item, index) => {
        const [createdAt, term] = item.split(' ');
        const expireDay = toDays(createdAt) + termsMap[term] * 28;
        
        if(expireDay <= todayDays) answer.push(index + 1);
    })
    
    
    return answer;
}