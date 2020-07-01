//2. https://www.e-olymp.com/ru/problems/2941 - 50 баллов
// (Решить можно любым способом, например: Дерево Фенвика, Дерево отрезков, sqrt Декомпозиция)

let n = 3; //размер массива
let q = 3; //количество операций
let tree = Array(4 * n); //дерево отрезков

/*построение дерева
tree - дерево
arr - данные
v - текущая вершина дерева
left - левая граница отрезка, соответствующего текущей вершине дерева
right - правая граница отрезка, соответствующего текущей вершине дерева
*/
function buildTree(tree, arr, v, left, right) {
    if (left !== right) {
        let tm = Math.floor((left + right) / 2);
        buildTree(tree, arr, v * 2, left, tm);
        buildTree(tree, arr, v * 2 + 1, tm + 1, right);
        tree[v] = tree[v * 2] + tree[v * 2 + 1];
    } else {
        tree[v] = arr[left]
    }
}

/*операция суммирования
tree - дерево
v - текущая вершина дерева
left - левая граница отрезка, соответствующего текущей вершине дерева
right - правая граница отрезка, соответствующего текущей вершине дерева
from - левая граница текущего запроса
to - правая граница текущего запроса
*/
function sum(tree, v, left, right, from, to) {
    if (from > to) {
        return 0;
    }
    if (from === left && to === right) {
        return tree[v];
    }
    let tm = Math.floor((left + right) / 2);
    return sum(tree, v * 2, left, tm, from, Math.min(to, tm))
        + sum(tree, v * 2 + 1, tm + 1, right, Math.max(from, tm + 1), to);
}

/*операция присваивания
tree - дерево
v - текущая вершина дерева
left - левая граница отрезка, соответствующего текущей вершине дерева
right - правая граница отрезка, соответствующего текущей вершине дерева
index - индекс элемента
new_val - его новое значение
*/
function update(tree, v, left, right, index, new_val) {
    if (left !== right) {
        let tm = Math.floor((left + right) / 2);
        if (index <= tm) {
            update(tree, v * 2, left, tm, index, new_val);
        } else {
            update(tree, v * 2 + 1, tm + 1, right, index, new_val);
        }
        tree[v] = tree[v * 2] + tree[v * 2 + 1];
    } else {
        tree[v] = new_val;
    }
}

function main() {
    let res = [];
    let arr = [1, 2, 3];
    buildTree(tree, arr, 1, 0, n - 1);
    let ops = [
        ['?', 1, 3],
        ['=', 3, 2],
        ['?', 1, 3],
    ];

    for (let i = 0; i < q; i++) {
        if (ops[i][0] === '?') {
            res.push(sum(tree, 1, 0, n - 1, ops[i][1]-1, ops[i][2]-1));
        } else if (ops[i][0] === '=') {
            update(tree, 1, 0, n - 1, ops[i][1]-1, ops[i][2]);
        }
    }

    return res.join('\n');
}

console.log(main());
