function solution(name, yearning, photo) {
    const scoreHashmap = {};
    name.forEach((item, index) => scoreHashmap[item] = yearning[index]);
    
    return photo.map((item) => 
     item.reduce((accumulator, currentValue) => accumulator + (scoreHashmap[currentValue] ?? 0), 0)
    );
}