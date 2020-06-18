//3. https://www.e-olymp.com/ru/problems/4051 - 30 балов
let n = 8;
let k = 2;

function jump(n, k) {
    let dp = Array(n + 1).fill(0);
    dp[1] = 1; //стартовая клетка
    dp[2] = 1; //минимальный шаг 1 клетка

    for (let i = 3; i <= n; i++) {
        if (i <= k) {
            dp[i] = 2 * dp[i - 1];
        } else {
            dp[i] = 2 * dp[i - 1] - dp[i - k - 1];
        }

    }
    return dp[n];
}

console.log(jump(n, k));