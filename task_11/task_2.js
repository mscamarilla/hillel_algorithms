//2. https://www.e-olymp.com/ru/problems/4671 - 30 баллов

function prefix_function(s) {
    let n = s.length;
    let pi = Array(n);

    pi[0] = 0;

    for (let i = 1; i < n; i++) {
        let j = pi[i - 1];

        while (j > 0 && s[i] !== s[j]) {
            j = pi[j - 1];
        }

        if (s[i] === s[j]) {
            j++;
        }
        pi[i] = j;
    }

    return pi;
}

function solve(s, t) {
    let a = s + '#' + t;
    let m = t.length;
    let n = s.length;
    let res = 0;

    let pi = prefix_function(a);

    for (let i = 0; i <= m + n; i++) {
        if (pi[i] === n) {
            res = i - 2 * n + 1;
            break;
        }
    }

    return res;
}

let t = 'eeeabcabcabcdfff';
let s = 'abcabcd';
console.log(solve(s, t));