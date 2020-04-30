// 4. Динамическое программирование:
// Есть n платформ, мы находимся на 0-й платформе.
// Можем перемещаться либо на 1 шаг, либо на 3 шага, либо на 5 шагов,
// найти количество способов добраться до 20ой платформы. (1 бал)


// dp[k] = dp[k-1] + dp[k-3] + dp[k-5]
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

    return platforms(k - 1) + platforms(k - 3) + platforms(k - 5);


}

console.log(platforms(20));