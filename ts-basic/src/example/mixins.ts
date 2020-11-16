interface ObjectA {
    a: string
}
// 对象的混入
interface ObjectB {
    b: string
}

const objA: ObjectA = {
    a: 'aaa'
}
const objB: ObjectB = {
    b: 'bbb'
}
const objAB: ObjectA & ObjectB = Object.assign({}, objA, objB);
console.log(objAB);

// ================================================================

// 类的混入
// 方式一：继承
class Sprite {
    constructor(public name: string) {
        this.name = name;
    }
}
class Position {
    setPos(x: number, y: number) {
        console.log(`(${x}, ${y})`);
    }
}

type Constructor<T> = new (...args: any[]) => T;

type Positionable = Constructor<{ setPos: (x: number, y: number) => void }>;
// type Spritable = Constructor<typeof Sprite>; // 该类型无法被使用，问题待研究
type Spritable = Constructor<{ name: string }>;

function Jumpable<TBase extends Positionable>(Base: TBase) {
    return class Jumpable extends Base {
        jump(x: number=0, y: number=20) {
            this.setPos(x, y);
        }
    }
}

const JumpableClass = Jumpable(Position);
const jumpable = new JumpableClass();
jumpable.jump();

// 或者当成装饰器用
@Jumpable
class JumpableCls {
    setPos(x: number, y: number) {
        console.log(`(${x}, ${y})`);
    }
}
interface JumpableCls {
    jump: (x: number, y: number) => void
}
const jumpable2 = new JumpableCls();
jumpable2.jump(1, -1);

// ==================================================

// 方式二：拷贝原型

class Disposable {
    isDisposed = false;
    dispose() {
        this.isDisposed = true;
    }

}

class Activatable {
    isActive = false;
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}

class SmartObject {
    isActive: boolean = false;
    isDisposed: boolean = false;

    constructor() {
        console.log(this.isActive + " : " + this.isDisposed);
        setTimeout(() => console.log(this.isActive + " : " + this.isDisposed), 1500);
    }

    interact() {
        this.activate();
    }

    activate() { }
}

interface SmartObject extends Disposable, Activatable { }

function applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(
                derivedCtor.prototype,
                name,
                <PropertyDescriptor>Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
            );
        });
    });
}

applyMixins(SmartObject, [Disposable, Activatable]);

const smartObj = new SmartObject();
setTimeout(() => smartObj.interact(), 1000);
