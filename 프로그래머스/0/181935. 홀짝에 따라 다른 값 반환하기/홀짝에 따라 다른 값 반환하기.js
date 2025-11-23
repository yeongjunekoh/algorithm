function solution(n) {
    return n % 2 ? (n+1)*(n+1)/4 : n*(n+1)*(n + 2)/6;
}