// TS 中的类

class Point {
    public x: number; // 默认公共修饰符，可省略
    y: number;
    private type = 'Point';

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getPosition() {
        this.log('call getPosition');
        return `(${this.x},${this.y})`;
    }

    private log(msg: string = '') {
        console.log(`[${new Date().toLocaleString()}] ${msg}`);
    }
}
const p = new Point(1, 2);
// console.log(p);
// console.log(p.getPosition());

// 私有属性/方法：禁止外部访问
// p.type;
// p.log();

// protected
// 受保护属性仅允许内部访问
// 受保护方法仅允许内部和子类访问
class TestParent {
    protected constructor() {}

    protected test() {
        console.log('Parent test');
    }
}

// new TestParent(); // 无法直接实例化

class Test extends TestParent {
    constructor() {
        super();
    }

    test() {
        super.test();
        console.log('Child test');
    }
}
const t = new Test();
// console.log(t);
// t.test();

class UserInfo {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}
const userInfo = new UserInfo('jack');
// userInfo.name = 'leo'; // 无法修改只读属性

class Info {
    name: string;
    age?: number; // 可选属性

    // 修饰符修饰的参数会自动添加为属性
    constructor(name: string, age?: number, public sex?: string) {
        this.name = name;
        this.age = age;
    }
}
const info1 = new Info('leo');
console.log(info1);

// 抽象类：无法直接实例化
abstract class Animal {
    abstract makeSound(): void
}
// new Animal(); // error

class Duke extends Animal {
    constructor() {
        super();
    }

    makeSound(): void {
        console.log('Gagaga!');
    }
}

const d = new Duke();
d.makeSound();

// class 的兼容性：只要实例属性一致，ts 中就可以互相赋值
class Class1 {
    constructor(public name: string) {
        this.name = name;
    }
}
class Class2 {
    constructor(public name: string) {
        this.name = name;
    }
}
let class1 = new Class1('Class one');
class1 = new Class2('Class two');

// 接口
interface USB {
    type: string;
    transfer(): void;
}
class LaptopUSB implements USB {
    type: string;

    constructor(type: string) {
        this.type = type;
    }

    transfer(): void {
        console.log('start data transfer......');
    }
}

// 类在泛型中的写法
const create = <T>(c: new(...args: any) => T, ...args: any): T => {
    return new c(...args);
}
class A {
    constructor(public type: string) {
        this.type = type;
    }
}
const a = create(A, 'Type-A');
console.log(a);
console.log(a.type);
