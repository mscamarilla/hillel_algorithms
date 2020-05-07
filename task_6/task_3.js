// 3. Задача про рюкзак - https://www.e-olymp.com/ru/problems/4831 (3 бала)

function backpack(bag, bars) {
    //bag - размер рюкзака
    //bars - слитки золота с каким-то весом

    // arr = временный массив длины bag, в котором arr[i] = 1 если можно набрать требуемый вес i слитками
    let arr = Array(bag).fill(0);
    arr[0] = 1;

    //Обрабатываем каждый слиток
    // Проходим по массиву arr справа налево и устанавливаем в 1 все такие arr[i] (bar ≤ i ≤ bag),
    // для которых arr[i - bag] = 1.
    bars.forEach(function (bar) {

        for (let i = bag; i >= bar; i--)
            if (arr[i - bar] === 1) {
                arr[i] = 1;
            }
    });

    //наибольший вес, который можно унести, но не больше объема рюкзака
    let result = 0;
    for (let i = 0; i < bag; i++) {
        if (arr[i] !== 0) {
            result = i;
        }
    }

    return result;
}

console.log(backpack(20, [5, 7, 12, 18]));
