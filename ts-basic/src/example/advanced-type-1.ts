// 交叉类型
const mergeObj = <T, U>(o1: T, o2: U): T & U => {
    let res = {} as T & U;
    res = Object.assign(o1, o2);
    return res;
}
console.log(mergeObj({ name: 'leo' }, { age: 20 }));

// 联合类型
const len = (content: string | number): number => {
    return (typeof content === 'string')
        ? content.length
        : content.toString().length;
}
console.log(len('abcd'), len(233));

// 类型保护
const valList = [123, 'abc'];
const getRandomVal = () => {
    const num = Math.random() * 10;
    return num < 5 ? valList[0] : valList[1];
}
const isString = (value: string | number): value is string => {
    return typeof value === 'string';
}
// 返回值类型未知，所以需要类型保护 isString() 确定类型
const item = getRandomVal();
if (isString(item)) {
    console.log(item.length);
}
// 简写
// 仅支持判断：string/number/boolean/symbol
// 仅支持等于和不等于表达式的判断
if (typeof item === 'string') {
    console.log(item.length);
}
// 针对对象类型使用 instanceof
class RandomClass1 {
    num = 1;
}
class RandomClass2 {
    val = 2;
}
const getRandomClass = () => {
    return Math.random() < 0.5 ? new RandomClass1() : new RandomClass2();
}
const randomClass = getRandomClass();
if (randomClass instanceof RandomClass1) {
    console.log(randomClass.num);
} else {
    console.log(randomClass.val);
}


function getName(num?: number): string {
    const addPrefix = (prefix: string): string => {
        return prefix + num?.toFixed(1);
    }
    return addPrefix('TypeScript-');
}
console.log(getName(), getName(2.33), getName(3.89));

// 类型别名
type TypeString = string;
type PositionType<T> = { x: T, y: T };
const pos1: PositionType<number> = {
    x: 10,
    y: -10
}
const pos2: PositionType<string> = {
    x: 'left',
    y: 'top'
}

type TreeType<T> = {
    value: T,
    children?: TreeType<T>[]
}
const tree: TreeType<string> = {
    value: 'country',
    children: [
        { value: 'China' },
        { value: 'America' }
    ]
}

// 字面量类型
type Direction = 'up' | 'down';
const d1: Direction = 'up';
// const d2: Direction = 'nothing'; // error
type Age = 18;

// 可辨识联合类型
// 每个单独类型需要一个统一的标志
interface Square {
    kind: 'square',
    size: number
}
interface Rectangle {
    kind: 'rectangle',
    width: number,
    height: number
}
interface Circle {
    kind: 'circle',
    radius: number
}
type Shape = Square | Rectangle | Circle;
function assertNever(value: never): never {
    throw new Error(`Unexpected object: ${value}`);
}
function getArea(s: Shape): number {
    switch (s.kind) {
        case 'square': return s.size * s.size;
        case 'rectangle': return s.width * s.height;
        case 'circle': return Math.PI * s.radius * s.radius;
        default: return assertNever(s); // 完整性检查，必须判断全部的 Shape 类型
    }
}
console.log(
    getArea({ kind: 'square', size: 10 }),
    getArea({ kind: 'rectangle', width: 3, height: 4 }),
    getArea({ kind: 'circle', radius: 5 })
);
