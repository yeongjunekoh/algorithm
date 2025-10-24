function solution(schedules, timelogs, startday) {
    var answer = 0;
    let start = startday-1;
    schedules.forEach((schedule, index) => {
        start = startday - 1;
        const win = timelogs[index].every((work) => {
            if(start % 7 === 5 || start % 7 === 6) {
                start += 1;    
                return true;
            }
            start += 1;
            
            const scheduleHour = Math.floor(schedule / 100) + Math.floor(((schedule + 10) % 100)/60);
            const scheduleMin = ((schedule + 10) % 100) % 60;
            const actualLimit = scheduleHour * 100 + scheduleMin;
            if(actualLimit >= work) return true;
            return false;
        });
        if(win) answer += 1;
    })
    return answer;
}


/** 최초 작성 코드
1. 주말 스킵 시 start를 증가시키지 않음.
function solution(schedules, timelogs, startday) {
    var answer = 0;
    let start = startday-1;
    schedules.forEach((schedule, index) => {
        start = startday - 1;
        const win = timelogs[index].every((work) => {
            if(start % 7 === 5 || start % 7 === 6) return true;
            start += 1;
            
            const scheduleHour = Math.floor(schedule / 100) + Math.floor(((schedule + 10) % 100)/60);
            const scheduleMin = ((schedule + 10) % 100) % 60;
            const actualLimit = scheduleHour * 100 + scheduleMin;
            if(actualLimit >= work) return true;
            return false;
        });
        if(win) answer += 1;
    })
    return answer;
}
*/