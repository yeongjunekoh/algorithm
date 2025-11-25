const operations = {
    '>=' : (n, m) => n >= m,
    '<=' : (n, m) => n <= m,
    '>!' : (n, m) => n > m,
    '<!' : (n, m) => n < m
};

function solution(ineq, eq, n, m) {
    return operations[`${ineq}${eq}`](n,m) ? 1 : 0;
}