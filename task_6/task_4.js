// 4. Задача про электространции - https://www.hackerrank.com/challenges/pylons/problem (4 бала)
function pylons(k, arr) {
    let result = 0;

    let i = 0;
    while (i < arr.length) {
        let found = false;

        for (let j = i + k - 1; (j >= i - k + 1) && (j >= 0); j--) {

            if (j < arr.length) {

                if (arr[j] === 1) {
                    result++;
                    i = j + k;
                    found = true;

                    break;
                }
            }
        }

        if (!found) {
            return -1;
        }
    }

    return result;

}

console.log(pylons(2, [0, 1, 1, 1, 1, 0]));