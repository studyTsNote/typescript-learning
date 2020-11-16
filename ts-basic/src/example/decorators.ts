function setName() {
    console.log('get setName');
    return (target: new () => TestOrder) => {
        console.log('call setName');
    }
}
function setAge() {
    console.log('get setAge');
    return (target: new () => TestOrder) => {
        console.log('call setAge');
    }
}
// 先自上而下构造装饰器，然后自下而上调用装饰器
// @setName()
// @setAge()
class TestOrder {}

// ================================================

// 类装饰器
function classDecorator<T extends new(...args: any[]) => any>(
    target: T
) {
    return class extends target {
        newProperty = "new property";
        hello = "override";
    }
}

@classDecorator
class Greeter {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}
// 由装饰器返回的类声明替代了原有的类
console.log(new Greeter("world"));

interface ObjWithAnyKeys {
    [key: string]: any
}
const obj: ObjWithAnyKeys = {
    age: 18
}
Object.defineProperty(obj, 'name', {
    value: 'jack',
    writable: false,
    configurable: false, // 无法再次 define name key
    enumerable: false
});
console.log(obj);
// obj.name = 'modify'; // error, writable: false
console.log(Object.keys(obj)); // no name key, enumerable: false

// =======================================================================

// 属性装饰器
function enumerable(bool: boolean) {
    return (target: any, propName: string, descriptor: PropertyDescriptor) => {
        // console.log(target, propName, descriptor);
        descriptor.enumerable = bool;
    }
}
class TestDec {
    constructor(public age: number) {}
    
    @enumerable(false)
    getAge() {
        return this.age
    }
}
const testDec = new TestDec(23);
console.log(Object.keys(testDec));

// =====================================

// 参数装饰器
function required(target: any, propName: string, index: number) {
    console.log(target); // class instance
    console.log(`修饰的是 ${propName} 的第 ${index + 1} 个参数`);
}
class TestDec1 {
    joinStr(prefix: string | number, @required str: string) {
        return `${prefix}-${str}`;
    }
}
const testDec1 = new TestDec1();
console.log(testDec1.joinStr(Date.now(), 'hello'));
