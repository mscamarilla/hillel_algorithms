//1.Написать функцию, которая определяет является ли число простым. (1 бал)

function isPrime(n) {

    if (n == 2) {
        return n + ' - true';
    }

    if (n == 1 || n % 2 === 0) {
        return n + ' - false';
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return n + ' - false';
        }
    }

    return n + ' - true';

};
console.log(isPrime(391)); // false;
console.log(isPrime(3)); // true;
console.log(isPrime(5)); // true;
console.log(isPrime(20)); // false;
console.log(isPrime(25)); // false;
console.log(isPrime(2)); // true;
console.log(isPrime(1)); // false;
console.log(isPrime(13)); // true;
console.log(isPrime(97)); // true;
console.log(isPrime(1000000007)); // true;
console.log(isPrime(1000000011)); // false;
