function solution(park, routes) {
    const [width, height] = [park[0].length - 1, park.length - 1];
    const map = {};
    park.forEach((row, yIndex) => {
        Array.from(row).forEach((item, xIndex) => map[item]?.length ? map[item].push([yIndex, xIndex]) :map[item] = [[yIndex, xIndex]]);
    });
    
    routes.forEach((route) => {
        let canMove = false;
        const [direction, distance] = route.split(' ');
        const [currentY, currentX] = [map['S'][0][0] ?? 0, map['S'][0][1] ?? 0];
        const movePosition = [currentY, currentX];
        
        if(direction === 'E'){
            movePosition[1] = movePosition[1] + Number(distance);
            if(movePosition[1] > width) return;
            canMove = !map['X']?.some((item) => 
                 item[0] === movePosition[0] && item[1] <= movePosition[1] && item[1] > currentX
            )
        } else if(direction === 'W'){
            movePosition[1] = movePosition[1] - Number(distance);
            
            if(movePosition[1] < 0) return;
            canMove = !map['X']?.some((item) => 
                 item[0] === movePosition[0] && item[1] >= movePosition[1] && item[1] < currentX
            )
        } else if(direction === 'N'){
            movePosition[0] = movePosition[0] - Number(distance);

            if(movePosition[0] < 0) return;
            canMove = !map['X']?.some((item) => 
                 item[1] === movePosition[1] && item[0] >= movePosition[0] && item[0] < currentY
            )
        } else if(direction === 'S'){
            movePosition[0] = movePosition[0] + Number(distance);
            
            if(movePosition[0] > height) return;
            canMove = !map['X']?.some((item) => 
                 item[1] === movePosition[1] && item[0] <= movePosition[0] && item[0] > currentY
            )
        }
        
        if(canMove) map['S'] = [movePosition];
    })
    
    return map['S'][0];
}


/** 초기 코드
function solution(park, routes) {
    const [width, height] = [park[0].length - 1, park.length - 1];
    const map = {};
    park.forEach((row, yIndex) => {
        Array.from(row).forEach((item, xIndex) => map[item]?.length ? map[item].push([yIndex, xIndex]) :map[item] = [[yIndex, xIndex]]);
    });
    
    routes.forEach((route) => {
        let canMove = false;
        const [direction, distance] = route.split(' ');
        const [currentY, currentX] = [map['S'][0][0] ?? 0, map['S'][0][1] ?? 0];
        const movePosition = [currentY, currentX];
        
        if(direction === 'E'){
            movePosition[1] = movePosition[1] + Number(distance);
            if(movePosition[1] > width) return;
            canMove = !map['X']?.some((item) => 
                 item[0] === movePosition[0] && item[1] <= movePosition[1] && item[1] > currentX
            )
        } else if(direction === 'W'){
            movePosition[1] = movePosition[1] - Number(distance);
            
            if(movePosition[1] < 0) return;
            canMove = !map['X']?.some((item) => 
                 item[0] === movePosition[0] && item[1] >= movePosition[1] && item[1] < currentX
            )
        } else if(direction === 'N'){
            movePosition[0] = movePosition[0] - Number(distance);

            if(movePosition[0] < 0) return;
            canMove = !map['X']?.some((item) => 
                 item[1] === movePosition[1] && item[0] >= movePosition[0] && item[0] < currentY
            )
        } else if(direction === 'S'){
            movePosition[0] = movePosition[0] + Number(distance);
            
            if(movePosition[1] > height) return;
            canMove = !map['X']?.some((item) => 
                 item[1] === movePosition[1] && item[0] <= movePosition[0] && item[0] > currentY
            )
        }
        
        if(canMove) map['S'] = [movePosition];
    })
    
    return map['S'][0];
}
*/