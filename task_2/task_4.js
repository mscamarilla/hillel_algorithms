//4. Реализовать Deep clone функцию в Javascript (1 бал) - такую задачу запросто могут спросить на собеседовании.
function deepClone(obj) {

    if(typeof(obj) != "object") {
        return obj;
    }

    // null
    if(!obj) {
        return obj; // null
    }

    let res = (obj instanceof Array) ? [] : {};
    for(let item in obj) {
        if(obj.hasOwnProperty(item)) {
            res[item] = deepClone(obj[item]);
        }
    }
    return res;
}
let obj = {
    value: 30,
    innerObj: {
        value: 20,
        innerObj2: {
            value: 10,
        }
    }
};

let obj2 = deepClone(obj);

obj.innerObj.innerObj2.value = 19;

console.log(obj);
console.log(obj2); // не должен меняться
