//2. https://www.e-olymp.com/ru/problems/2941 - 50 баллов (
//Решить можно любым способом, например: Дерево Фенвика, Дерево отрезков, sqrt Декомпозиция)

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; // изначальный массив
let q = 3; // количество операций
let n = arr.length; //длина массива
let blockSize = Math.ceil(Math.sqrt(n)); // размер одного блока
let block = Array(blockSize).fill(0); // массив блоков


function build() {
    let blockIndex = -1; // индекс блока

    //построение массива блоков
    for (let i = 0; i < n; i++) {
        //если условие соблюдается, это новый блок
        if (i % blockSize === 0) {
            blockIndex++;
        }

        block[blockIndex] += arr[i];
    }

}

//обновление данных
function update(idx, val) {
    let blockNumber = Math.floor(idx / blockSize);
    block[blockNumber] += val - arr[idx];
    arr[idx] = val;
}

//подсчет суммы
function sum(l, r) {
    let sum = 0;
    let c_l = Math.floor(l / blockSize), c_r = Math.floor(r / blockSize);

    //находятся ли l и r в одном блоке
    if (c_l === c_r) {
        for (let i = l; i <= r; i++) {
            sum += arr[i];
        }
    } else {
        //хвост блока l
        //пока i не дойдет до границы блока
        for (let i = l, end = (c_l + 1) * blockSize - 1; i <= end; i++) {
            sum += arr[i];
        }
        //все блоки в середине
        for (let i = c_l + 1; i <= c_r - 1; i++) {
            sum += block[i];
        }
        //хвост блока r
        //пока i не дойдет до границы блока
        for (let i = c_r * blockSize; i <= r; i++) {
            sum += arr[i];
        }
    }

    return sum;
}

function solve() {
    let res = [];

    build();

    let ops = [
        ['?', 1, 3],
        ['=', 3, 2],
        ['?', 1, 3],
    ];
    for (let i = 0; i < q; i++) {
        if (ops[i][0] === '?') {
            res.push(sum(ops[i][1]-1, ops[i][2]-1));
        } else if (ops[i][0] === '=') {
            update(ops[i][1]-1, ops[i][2]);
        }
    }

    return res.join('\n');

}

console.log(solve());
