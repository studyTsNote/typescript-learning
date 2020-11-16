// 类型推断

// window.onmousedown = (event: MouseEvent) => {
//     console.log(event);
// }

const arr = [1, 'abc'];
arr.push('2');
// arr.push(false); // error
// 自动推断类型为：Array<number | string>

// ===============================================

// 类型兼容性
interface IInfo {
    name: string
}
let info: IInfo;
const leo = { name: 'leo' };
const jack = { name: 'jack', age: 20 };
info = leo;
info = jack; // 只要包含了必要属性即可

// 函数参数双向协变
// tsconfig.strict = true 可关闭该功能
const fnA = (arg: number | string): void => console.log(`A-${arg}`);
let fnB = (arg: number): void => console.log(`B-${arg}`);
// fnA = fnB; // 开启严格检查，无法进行赋值
fnB = fnA;
fnB(233);

// 函数重载
function merge(x: number, y: number): number
function merge(x: string, y: string): string
function merge(x: any, y: any) {
    return x + y;
}
merge('ab', 'c').length;

// 类的兼容性
// 1.只检测实例属性，静态属性不影响
class CParent {
    static type: string;
    constructor(public name: string) {
        this.name = name;
    }
}
class CChild {
    static type: number;
    constructor(public name: string) {
        this.name = name;
    }
}
const cp1: CParent = new CChild('duke');
const cc1: CChild = new CParent('animal');

// 2.存在 private、protected 修饰的属性，无法互相赋值
class CParent2 {
    private type = 'CParent2';
    constructor(public name: string) {
        this.name = name;
    }
}
class CChild2 {
    private type = 'CChild2';
    constructor(public name: string) {
        this.name = name;
    }
}
// const cp2: CParent2 = new CChild2('duke'); // error
// const cc2: CChild2 = new CParent2('animal'); // error

class CParent3 {
    protected type = 'CParent3';
    constructor(public name: string) {
        this.name = name;
    }
}
class CChild3 extends CParent3 {
    protected type = 'CChild3';
    constructor(public name: string) {
        super(name);
        this.name = name;
    }
}
const cp3: CParent3 = new CChild3('duke');
// const cc3: CChild3 = new CParent3('animal'); // error：type 受保护，但 CParent3 不是从 CChild3 派生的类
