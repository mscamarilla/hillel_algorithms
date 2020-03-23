//1.Написать функцию, которая определяет является ли число простым. (1 бал)

function isPrime(n) {

    if (n == 2) {
        return n + ' - true';
    }

    if (n == 1 || n % 2 === 0) {
        return n + ' - false';
    }

    let i = 3;

    while (i <= n) {
        if (n % Math.sqrt(n) === 0) {
            return n + ' - false';
        }
        if (n != i && n % i === 0) {
            return n + ' - false';
        } else {
            return n + ' - true';
        }

        i += 2;
    }

};

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
