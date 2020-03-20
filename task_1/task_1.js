//1.Написать функцию, которая определяет является ли число простым. (1 бал)
isPrime(25); // false;
isPrime(2); // true;
isPrime(1); // false;
isPrime(13); // true;
isPrime(97); // true;
isPrime(1000000007); // true;
isPrime(1000000011); // false;

function isPrime(n) {
    let res;

    if (n == 1) {
        res = n + ' - false';
    }

    if (n == 2) {
        res = n + ' - true';
    }

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            res = n + ' - false';
        } else {
            res = n + ' - true';
        }
    }

    console.log(res);
};