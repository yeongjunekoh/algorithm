function solution(numbers) {
    numbers.sort((a, b) => {
        const num1 = parseInt(a.toString() + b.toString());
        const num2 = parseInt(b.toString() + a.toString());
        return num2 - num1; // 큰 숫자가 앞으로 오도록 정렬
    });

    // 0으로 시작되면 무조건 뒤에것도 0일 수 밖에 없음.
    return numbers.join("").startsWith("0") ? "0" : numbers.join("");
}