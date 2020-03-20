//2. Оценить сложность следующего фрагмента кода (1 бал)
let n = 10000;
let arr = [];
let sum = 0;

//O(n)
for (let i = 0; i < n; i++) {
    arr.push(i * i + 2 * i + 28);
}

//O(n+(n/2)^2)
for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
        for (let j = 0; j < i; j++) {
            sum += arr[j];
        }
    }
}

