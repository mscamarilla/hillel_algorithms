// 5. https://www.e-olymp.com/ru/problems/15 - 2 бала

//grains[i][j] = Max(grains[i - 1][j], grains[i][j - 1]) + arr[i][j]
function grains(field) {
    const n = field.length; // строки
    const m = field[0].length; // столбцы

    let temp_arr = [];
//создаем вспомогательный массив и заполняем его -1
    for (let i = 0; i <= n + 1; i++) {
        temp_arr.push(Array(m + 2).fill(-1));
    }

//во вспомогательный массив копируем исходный. Так создадутся стенки
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            temp_arr[i + 1][j + 1] = field[i][j] + Math.max(temp_arr[i][j+1], temp_arr[i+1][j])
        }
    }
    console.log(temp_arr);

    let result = '';
    let i = n;
    let j = 1;

    while (i >= 1 && j <= m) {
        //если значение сверху больше (или равно), чем справа, двигаемся вверх
        if (temp_arr[i - 1][j] >= temp_arr[i][j + 1]) {
            if (temp_arr[i - 1][j] !== -1) {
                result += 'F';
            }
            i--; // и отнимаем i, потому что мы поднимаемся снизу

        } else {
            //если значение справа больше, чем вверху, двигаемся вправо
            if (temp_arr[i][j + 1] !== -1) {
                result += 'R';
            }
            j++;// и плюсуем j, потому что двигаемся слева направо

        }


    }
    return result;
}

let field = [
    [23, 4, 7, 8, 94, 23, 5, 6],
    [2, 9, 7, 56, 83, 5, 44, 2],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [8, 7, 6, 5, 4, 32, 2, 1],
    [90, 87, 3, 5, 4, 3, 2, 5],
    [28, 75, 60, 94, 33, 3, 2, 7],
    [76, 92000, 402, 28, 3, 2, 11, 200]
]; //RRFRRFFRFRFFR


console.log(grains(field));