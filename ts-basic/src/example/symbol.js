// 基本类型，表示独一无二的值

const s1 = Symbol();
console.log(s1);

const s2 = Symbol();
// s1 !== s2

const s3 = Symbol('jack');
console.log(s3.toString());
console.log(Boolean(s3));
console.log(!s3);

const s4 = Symbol('name');
const info = {
    [s4]: 'leo',
    age: 18,
    sex: 'male'
}
console.log(info);
info[s4] = 'tim';
console.log(info);

// 以下方式均拿不到对象中的 symbol 属性
let keys = [];
for (const k in info) {
    keys.push(k);
}
console.log(keys);
console.log(Object.keys(info));
console.log(Object.getOwnPropertyNames(info));
console.log(JSON.stringify(info));

// 如何拿到 symbol 属性？
console.log(Object.getOwnPropertySymbols(info));
console.log(Reflect.ownKeys(info));

const s5 = Symbol('test');
const s6 = Symbol.for('test');
const s7 = Symbol.for('test');
// s5 !== s6
// s6 === s7

console.log(Symbol.keyFor(s5)); // undefined
console.log(Symbol.keyFor(s6)); // 'test'

// 内置 symbol 值
// Symbol.hasInstance
// instanceof 时会调用该值声明的函数
const obj1 = {
    [Symbol.hasInstance] (other) {
        console.log(other);
        return true;
    }
}
console.log({a:'a'} instanceof obj1);

// Symbol.isConcatSpreadable
let arr = [1, 2];
console.log([].concat(arr, [3, 4])); // 自动扁平化
arr[Symbol.isConcatSpreadable] = false;
console.log([].concat(arr, [3, 4])); // 不会扁平化

// 相应的调用会触发相应 symbol 值声明的函数
// Symbol.match、Symbol.search、Symbol.split
const obj2 = {
    [Symbol.match] (str) {
        console.log(str.length);
    }
}
'abcde'.match(obj2);

// 获取数组迭代器
let arr2 = [1, 2];
const iterator = arr2[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// 自定义基础类型转换
let obj3 = {
    [Symbol.toPrimitive] (type) {
        console.log(type);
    }
}
let ret = obj3++;

let obj4 = {
    [Symbol.toStringTag]: 'obj4'
}
console.log(obj4.toString()); // '[object obj4]'
