function solution(today, terms, privacies) {
    const LAST_DAY_INDEX = 27;
    const LAST_MONTH_INDEX = 11;
    
    const termsMap = {};
    const todayArray = today.split('.').map((item) => Number(item));
    var answer = [];
    
    const calculateExpireDate = (createAt, period) => {
        let [year, month, date] = createAt.split('.').map((item) => Number(item) - 1);
        month += period;
        date--;
        
        if(date < 0) {
            month--;
            date = LAST_DAY_INDEX;
        }
        
        if(month < 0) {
            year--;
            month = LAST_MONTH_INDEX;
        }
        
        if(month >= 12) {
            year = year + Math.floor(month/12);
            month = month%12
        }
        return [year+1, month+1, date+1];
    }
    
    const shouldExpire = (currentDt, expiredDt) => {
        const [currentYear, currentMonth, currentDate] = currentDt;
        const [expiredYear, expiredMonth, expiredDate] = expiredDt;
        
        if(expiredYear < currentYear) return true;
        if(expiredYear === currentYear && expiredMonth < currentMonth) return true;
        if(expiredYear === currentYear && expiredMonth === currentMonth && expiredDate < currentDate) return true;
        
        return false;
    }
    
    terms.forEach((item) => {
        const [term, period] = item.split(' ');
        termsMap[term] = Number(period);
    });
    
    privacies.forEach((item, index) => {
        const [createdAt, term] = item.split(' ');
        if(shouldExpire(todayArray, calculateExpireDate(createdAt, termsMap[term]))) answer.push(index + 1);
    })
    
    
    return answer;
}