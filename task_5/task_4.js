// 4. Динамическое программирование:
// Есть n платформ, мы находимся на 0-й платформе.
// Можем перемещаться либо на 1 шаг, либо на 3 шага, либо на 5 шагов,
// найти количество способов добраться до 20ой платформы. (1 бал)


// dp[k] = dp[k-1] + dp[k-3] + dp[k-5]
let temp = {};

function platforms(k) {
    if (k === 1 || k === 2){
        return 1;
    }
    if(k === 3){
        return 2;
    }
    if(k === 4){
        return 3;
    }
    if(k === 5){
        return 6;
    }

    if (!temp[k - 1]) {
        let res = platforms(k - 1);
        temp[k - 1] = res;
    }

    if (!temp[k - 3]) {
        let res = platforms(k - 3);
        temp[k - 3] = res;
    }

    if (!temp[k - 5]) {
        let res = platforms(k - 5);
        temp[k - 5] = res;
    }

    return temp[k - 1] + temp[k - 3] + temp[k - 5];


}

console.log(platforms(40));