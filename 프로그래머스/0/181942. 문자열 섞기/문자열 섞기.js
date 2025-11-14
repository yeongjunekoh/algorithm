function solution(str1, str2) {    
    return [...str1].map((alphabet, index) => alphabet + str2[index]).join('');
}