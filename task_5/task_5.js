// 5. https://www.e-olymp.com/ru/problems/15 - 2 бала

//grains[i][j] = Max(grains[i - 1][j], grains[i][j - 1]) + arr[i][j]
function grains(field) {
    const n = field.length; // строки
    const m = field[0].length; // столбцы

    let dp = [];
    //создаем вспомогательный массив и заполняем его -1
    for (let i = 0; i <= n + 1; i++) {
        dp.push(Array(m + 2).fill(-1));
    }

    dp[n + 1][1] = 0;

    //во вспомогательный массив копируем исходный. Так создадутся стенки
    for (let i = n; i > 0; i--) {
        for (let j = 0; j < m; j++) {
            dp[i][j + 1] = field[i - 1][j] + Math.max(dp[i][j], dp[i + 1][j + 1]);
        }
    }
    console.log(dp);
    let result = '';
    let i = n;
    let j = 1;

    while (i > 0 && j <= m) {
        //если значение сверху больше (или равно), чем справа, двигаемся вверх
        if (dp[i - 1][j] >= dp[i][j + 1]) {
            if (dp[i - 1][j] !== -1) {
                result += 'F';
            }
            i--;

        } else {
            //если значение справа больше, чем вверху, двигаемся вправо
            if (dp[i][j + 1] !== -1) {
                result += 'R';
            }
            j++;

        }
    }

    return result;
}

let field = [
    [50, 10, 100],
    [1, 10, 40],
]; //RFR


console.log(grains(field));
