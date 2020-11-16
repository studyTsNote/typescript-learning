// 泛型

function getArray<T>(value: T, times: number = 5): T[] {
    return Array(times).fill(value);
}

// 类型检查会提示：number 没有 length 属性
// console.log(getArray(1, 5).map(item => item.length));

const getArray2 = <K, V>(key: K, value: V, times: number): Array<[K, V]> => {
    return Array(times).fill([key, value]);
}

console.log(getArray2('age', 18, 3));

// 类型别名
type GetArray = <T>(element: T, times: number) => T[];
const fn1: GetArray = (val, times) => {
    return new Array(times).fill(val);
}

interface IGetArray<T> {
    (val: T, times: number): T[]
}

// 泛型约束
interface ValueWithLength {
    length: number
}
// 传入的 val 必须具有 length 属性
const getArray3 = <T extends ValueWithLength>(val: T, times: number): T[] => {
    return Array(times).fill(val);
}
console.log(getArray3('abc', 3));

// keyof T 返回 T 的属性名数组，即限制 propName 必须传入 obj 包含的属性名
const getProps = <T, K extends keyof T>(obj: T, propName: K) => {
    return obj[propName];
}

const user = {
    name: 'leo',
    age: 18
}
console.log(getProps(user, 'name'));
