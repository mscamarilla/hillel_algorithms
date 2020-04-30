// 5. https://www.e-olymp.com/ru/problems/15 - 2 бала

//grains[i][j] = Max(grains[i - 1][j], grains[i][j - 1]) + arr[i][j]
function grains(field) {
    const n = field.length; // строки
    const m = field[0].length; // столбцы
    field.reverse(); //реверс

    let temp_arr = [];
//создаем вспомогательный массив и заполняем его -1
    for (let i = 0; i <= n + 1; i++) {
        temp_arr.push(Array(m + 2).fill(-1));
    }
    temp_arr[0][1] = 0;//реверс

    //во вспомогательный массив копируем исходный. Так создадутся стенки
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            temp_arr[i + 1][j + 1] = field[i][j] + Math.max(temp_arr[i][j + 1], temp_arr[i + 1][j]);
        }
    }
    console.log(temp_arr)
    let result = '';
    let i = 1;
    let j = 1;
    while (i <= n && j <= m) {
        //если значение сверху больше (или равно), чем справа, двигаемся вверх
        if (temp_arr[i + 1][j] >= temp_arr[i][j + 1]) {
            if (temp_arr[i + 1][j] !== -1) {
                result += 'F';
            }
            i++;

        } else {
            //если значение справа больше, чем вверху, двигаемся вправо
            if (temp_arr[i][j + 1] !== -1) {
                result += 'R';
            }
            j++;

        }
    }
    return result.split("").reverse().join("");
}

let field = [
    [3, 2, 4],
    [1, 5, 1],
]; //RFR


console.log(grains(field));