//6. Зарегистрироваться на этом сайте и решить эту задачу -
// https://www.hackerrank.com/challenges/arrays-ds/problem ( 1 бал)

function reverseArray(a) {
    let result = [];
    let a_length = a.length-1;

    a.forEach(function(item, i, a){
        result.push(a[a_length--]);
    });

    return result;
}