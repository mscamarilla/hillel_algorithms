// 3. Отсортировать массив строк по их числовому значению. (2 бала)
// По сути нужно реализовать компаратор, который работает со строками
// Пример:
// [“5”, “10”, “123”, “1”];
// Ответ: [“1”, “5”, “10”, “123”];

let arr = ['5', '10', '123', '1', '12345', '432', '1111','1111111111111111111', '2222222222222222222222222222222222222222', '12323423423423423423432423432432423423', '1', '12345', '432', '1111','111111111111111111','111111111111111110','111111111111111112','111111111111111109'];

function compare(arr){
    arr.sort((a, b) => {
        let digits_a = String(a).slice('');
        let digits_b = String(b).slice('');

        if(digits_a.length === digits_b.length){
            return a.localeCompare(b);
        } else {
            return a - b;
        }
    });

    return arr;
}

console.log(arr);
console.log(compare(arr));