// es5 class
// function Point(x, y) {
//     this.x = x;
//     this.y = y;
// }
// Point.prototype.getPosition = function() {
//     return '(' + this.x + ',' + this.y + ')';
// }

// var p1 = new Point(2, 3);
// console.log(p1);
// console.log(p1.getPosition());

// es6 class
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getPosition() {
        return `(${this.x},${this.y})`;
    }
}
let p1 = new Point(2, 3);
console.log(p1);
console.log(p1.getPosition());
console.log(Object.getOwnPropertyNames(p1)); // ["x", "y"]
console.log(Object.getOwnPropertyNames(p1.__proto__)); // ["constructor", "getPosition"]

// ================================================

// 取值/赋值
// var info = {
//     _age: 18,
//     get age() {
//         // console.log('你猜啊');
//         return this._age;
//     },
//     set age(newVal) {
//         if (newVal > this._age) {
//             console.log('长大了');
//         } else if (newVal < this.age) {
//             console.log('年轻了');
//         }
//         this._age = newVal;
//     }
// }
// console.log(info.age);
// info.age = 20;
// console.log(info.age);

// const Info = class {
//     constructor(age) {
//         this._age = age;
//     }

//     get age() {
//         // console.log('你猜啊');
//         return this._age;
//     }

//     set age(newVal) {
//         if (newVal > this._age) {
//             console.log('长大了');
//         } else if (newVal < this._age) {
//             console.log('年轻了');
//         }
//         this._age = newVal;
//     }
// }
// let info1 = new Info(10);
// console.log(info1.age);
// info1.age = 8;
// console.log(info1.age);

// ================================================

// class Test {
//     static getClassName() {
//         return Test.name;
//     }
// }
// console.log(Test.getClassName());

// 私有方法
import Test1 from './class-private-fn';
console.log(new Test1());

// ======================================================

// new.target
// class Test2 {
//     constructor() {
//         if (new.target) {
//             console.log(new.target);
//             console.log(typeof new.target);
//         }
//     }
// }
// new Test2();

// 抽象类
class AbstractTest {
    constructor() {
        if (new.target === AbstractTest) {
            throw new Error('抽象类无法被实例化');
        }
    }
}
// new AbstractTest(); // error

class Test3 extends AbstractTest {
    constructor() {
        super();
    }
}
console.log(new Test3());

// =================================================

// es5 继承
function Food() {
    this.type = 'food';
}
Food.prototype.getType = function() {
    return this.type;
}
function Fruit(name) {
    this.name = name;
}
Fruit.prototype = new Food();
let apple = new Fruit('apple');
console.log(apple.getType());

class Parent {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return `Parent: ${this.name}`;
    }

    static getClassName() {
        return this.name;
    }
}
class Child extends Parent {
    constructor(parentName, age) {
        super(parentName);
        this.age = age;
    }
}
let child = new Child('God', 20);
console.log(child); // {name: "God", age: 20}
console.log(child.getName()); // this 是 child 实例
console.log(child instanceof Child);
console.log(child instanceof Parent);

// 注意这里结果是：'Child'
console.log(Child.getClassName()); // this 是 Child class
console.log(Child.getClassName.call(new Parent('leo'))); // 手动绑定 this，则结果为 'leo'

console.log(Object.getPrototypeOf(Child) === Parent);

// super
// super 函数：this 指向子类，所以会将父类的属性赋值到子类上
// super 对象
    // 1.普通方法中指代父类的原型对象
    // 2.静态方法中指代父类本身，即 class


// prototype
let obj = new Object();
console.log(obj.__proto__ === Object.prototype);

// 子类 __proto__ => 父类本身
// 子类 prototype 属性的 __proto__ => 父类 prototype 属性
// 实例 __proto__ 属性的 __proto__ => 父类实例 __proto__

// =====================================================

// es6 允许继承原生类
// Boolean String Array Date Functionn RegExp Error Object
class CustomArray extends Array {
    constructor(...args) {
        super(...args);
    }
}
let arr = new CustomArray(3);
console.log(arr.fill('+'));

let arr2 = new CustomArray(1, 2, 3);
console.log(arr2.join('_'));