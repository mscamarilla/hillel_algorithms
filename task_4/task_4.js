// 4. Проверить правильность скобочной последовательности, разрешаются скобки трех видов: ( 1 бал )
// {}
// []
// ()

const tests = [

    "()", // - true
    "[]", // - true
    "{}", // - true
    "([{}])", // - true
    "(}", // - false*/
    "((", // - false
    "[]]", // - false
    "", //  -  true
    "[[]]", // - true
    "}{", // - false
    "(){][}", // - false

];


class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}

class Stack {
    constructor() {
        this.size = 0;
        this.head = null;
    }

    push(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;

        this.size++;
    }

    back() {
        return this.head.value;
    }

    pop() {
        if (this.size === 0) return null;
        const value = this.head.value;
        this.head = this.head.next;

        this.size--;
        return value;
    }

    clear() {
        this.size = 0;
        this.head = null;
    }
};

function solve(str) {
    const stack_round = new Stack(); // ()
    const stack_square = new Stack(); // []
    const stack_braces = new Stack(); // {}

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack_round.push(str[i]);
        }
        if (str[i] === '[') {
            stack_square.push(str[i]);
        }
        if (str[i] === '{') {
            stack_braces.push(str[i]);
        }

        if (str[i] === ')') {
            if (!stack_round.pop()) {
                return false;
            }
        }
        if (str[i] === ']') {
            if (!stack_square.pop()) {
                return false;
            }
        }

        if (str[i] === '}') {
            if (!stack_braces.pop()) {
                return false;
            }
        }


    }

    return stack_round.size === 0 && stack_square.size === 0 && stack_braces.size === 0;


}


tests.forEach((test) => {
    console.log(test, solve(test));
})
