//1. https://www.e-olymp.com/ru/problems/2463 - 30 баллов

function prefix_function(s) {
    let n = s.length;
    let pi = Array(n);

    pi[0] = 0;

    for (let i = 1; i < n; ++i) {
        let j = pi[i - 1];

        while (j > 0 && s[i] !== s[j]) {
            j = pi[j - 1];
        }

        if (s[i] === s[j]) {
            j++;
        }
        pi[i] = j;
    }

    let k = n - pi[n - 1];

    if (n % k === 0) {
        return k;
    } else {
        return n;
    }
}

let string = 'abcabcabc';
console.log(prefix_function(string));