//2. https://www.e-olymp.com/ru/problems/2941 - 50 баллов
// (Решить можно любым способом, например: Дерево Фенвика, Дерево отрезков, sqrt Декомпозиция)

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

let n = 0; //размер массива
let q = 0; //количество операций
let blockSize = 0; // размер одного блока
let block = []; // массив блоков
let arr = []; //изначальный массив
let ops = []; //массив операций


process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

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
function update(index, val) {
    let blockNumber = index / blockSize;
    block[blockNumber] += val - arr[index];
    arr[index] = val;
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


//решение
function solve() {
    let res = [];

    build();

    for (let i = 0; i < q; i++) {
        if (ops[i][0] === '?') {
            res.push(sum(ops[i][1] - 1, ops[i][2] - 1));
        } else if (ops[i][0] === '=') {
            update(ops[i][1] - 1, ops[i][2]);
        }
    }

    return res.join('\n');

}

function main() {
    var first_line = readLine().split(' ');
    n = parseInt(first_line[0]);
    q = parseInt(first_line[1]);
    blockSize = Math.ceil(Math.sqrt(n)); // размер одного блока
    block = Array(blockSize).fill(0); // массив блоков


    var second_line = readLine().split(' ');

    for (let i = 0; i < n; i++) {
        arr.push(parseInt(second_line[i]))
    }

    for (let i = 0; i < q; i++) {
        let op = readLine().split(' ');
        let val = [op[0], parseInt(op[1]), parseInt(op[2])];
        ops.push(val);
    }

    let result = solve();
    console.log(result);
}