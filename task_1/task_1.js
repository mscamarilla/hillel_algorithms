//1.Написать функцию, которая определяет является ли число простым. (1 бал)
isPrime(2); // true;
isPrime(1); // false;
isPrime(13); // true;
isPrime(97); // true;
isPrime(1000000007); // true;
isPrime(1000000011); // false;

function isPrime(n) {

    if (n == 1) {
        console.log(n + ' - false');
    }

    if (n == 2) {
        console.log(n + ' - true');
    }

    for (let i = 3; i < n; i += 2) {
        if (n % i === 0) {
            console.log(n + ' - false');
            break;
        } else {
            console.log(n + ' - true');
            break;
        }
    }
};