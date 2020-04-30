// 3. Сгенерировать таблицу умножения 1000х1000, и вывести в порядке убывания
// первые 10 самых частых произведений двух 2 чисел (2 раза). Решить используя Map

function table() {
    let map = new Map();
    let counter = 1000;

    //первый множитель
    for (let a = 1; a <= counter; a++) {
        let count_a = map.has(a) ? map.get(a) : 0;
        count_a++;
        map.set(a, count_a);
    }

    //второй множитель
    for (var b = 1; b <= counter; b++) {
        let count_b = map.has(b) ? map.get(b) : 0;
        count_b++;
        map.set(b, count_b);

        //результат умножения;
        for (var c = 1; c <= counter; c++) {
            let count_bc = map.has(b * c) ? map.get(b * c) : 0;
            count_bc++;
            map.set(b * c, count_bc);
        }

    }

    //массив объектов из map
    let data = [];
    map.forEach(function (item, i) {
        data.push({number: i, count: item})
    });

    //сортируем
    data.sort(function (a, b) {
        return b.count - a.count;
    });

    //обрезаем
    let result = data.slice(0, 10);

    console.log(result);

}

table();