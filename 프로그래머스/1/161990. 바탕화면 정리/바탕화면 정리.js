function solution(wallpaper) {
    let minX = 50, minY = 50, maxX = -1, maxY = -1;
    const list = []
    wallpaper.forEach((item, index) => {
        if(item.indexOf('#') < 0) return;
        const first = item.indexOf('#');
        const last = item.lastIndexOf('#');
        
        minX = Math.min(minX, index);
        minY = Math.min(minY, first);
        maxX = Math.max(maxX, index);
        maxY = Math.max(maxY, last);
    });
    var answer = [minX, minY, maxX + 1, maxY + 1];
    return answer;
}