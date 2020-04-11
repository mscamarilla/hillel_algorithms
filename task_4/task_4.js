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
    const stack = new Stack(); // ()

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack.push(str[i]);
        }
        if (str[i] === '[') {
            stack.push(str[i]);
        }
        if (str[i] === '{') {
            stack.push(str[i]);
        }

        if (str[i] === ')') {
            if (stack.pop() !== '(') {
                return false;
            }
        }
        if (str[i] === ']') {
            if (stack.pop() !== '[') {
                return false;
            }
        }

        if (str[i] === '}') {
            if (stack.pop() !== '{') {
                return false;
            }
        }


    }

    return stack.size === 0;


}


tests.forEach((test) => {
    console.log(test, solve(test));
})
