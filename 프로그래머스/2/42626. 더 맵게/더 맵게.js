/*
    문제 설명
    01.  Leo는 모든 음식의 스코빌 지수를 K 이상으로 만들고 싶습니다
    02. 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 Leo는 스코빌 지수가 가장 낮은 두 개의 음식을 아래와 같이 특별한 방법으로 섞어 새로운 음식을 만듭니다
    03. 섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)
    04. 모든 음식의 스코빌 지수가 K 이상이 될 때까지 반복하여 섞습니다.
    
    식의 스코빌 지수를 담은 배열 scoville과 원하는 스코빌 지수 K가 주어질 때, 
    모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 섞어야 하는 최소 횟수를 return 하도록 solution 함수를 작성해주세요.
*/

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let element = this.heap[index];
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];

            if (parent <= element) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }

    extractMin() {
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.sinkDown(0);
        }
        return min;
    }

    sinkDown(index) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let smallest = index;
        const length = this.heap.length;

        if (left < length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }
        if (right < length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }
        if (smallest !== index) {
            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
            this.sinkDown(smallest);
        }
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    peek() {
        return this.heap[0];
    }
}

function solution(scoville, K) {
    let mixCount = 0;
    let heap = new MinHeap();
    
    scoville.forEach(item => heap.insert(item));
    
    while (heap.size() > 1 && heap.peek() < K) {
        const leastSpicy = heap.extractMin();
        const secondLeastSpicy = heap.extractMin();
        const mixedSpice = leastSpicy + secondLeastSpicy * 2;
        heap.insert(mixedSpice);
        mixCount++;
    }
    
    if (heap.peek() < K) return -1;
    return mixCount;
}

/*
자료구조 없이 정렬, 스택 구조로 문제를 풀었을 경우.
-> 매번 새로운 음식을 만들 때마다 배열을 정렬 해야 함 | 시간복잡도 증가
-> 'scoville' 배열의 길이가 최대 1,000,000까지 가능 | 효율성 테스트가 어려움.

function solution(scoville, K) {
    let mixCount = 0;
    scoville.sort((a, b) => a - b);

    while (scoville[0] < K) { // 최소 값이 K보다 작음을 검증.
        if (scoville.length < 2) return -1;
        let leastSpicy = scoville.shift();
        let secondLeastSpicy = scoville.shift();
        let mixedSpice = leastSpicy + secondLeastSpicy * 2;
        scoville.push(mixedSpice);
        scoville.sort((a, b) => a - b);
        mixCount++;
    }
    
    return mixCount;
}
*/