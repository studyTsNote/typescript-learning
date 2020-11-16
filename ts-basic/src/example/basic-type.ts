// 布尔
const bool: boolean = true;
// 简单类型 ts 可自动推断，所以实际不用声明
// eslint 也会帮忙自动优化写法，但由于练习代码，故配置里关了该条建议

// 数值
let num: number = 123;
num = 0b1111011;
num = 0o173;
num = 0x7b;

// 字符串
const str: string = 'abc';

// 数组
const arr1: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];
const arr3: Array<string | number> = [1, 2, 'a'];

// 元组：数值类型一一对应
const tuple: [string, number ,boolean] = ['a', 1, false];

// 枚举
enum Roles {
    SUPER_ADMIN,
    ADMIN,
    USER = 'user'
}
console.log(Roles);

// any
let val: any;
let vals: Array<any>;

// void: 可赋值 undefined
const printMsg = (msg: string): void => {
    console.log(msg);
}
printMsg('Hello TS!');

const u: undefined = undefined;
const n: null = null;

// 无返回值：抛异常或死循环
const errorFn = (): never => {
    throw new Error('error');
}

// 对象
function printObj(obj: Record<string, unknown>): void {
    console.log(JSON.stringify(obj));
}

// 类型断言
const getLen = (target: string | number): number => {
    if ((<string>target).length || (target as string).length) {
        return (target as string).length;
    } else {
        return target.toString().length;
    }
}
console.log(getLen('abc'));
console.log(getLen(123));
