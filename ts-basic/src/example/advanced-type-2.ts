class Counter {
    constructor(public count: number = 0) {
        this.count = count;
    }

    add(value: number) {
        this.count += value;
        return this;
    }

    subtract(value: number) {
        this.count -= value;
        return this;
    }
}
const counter = new Counter(10);
console.log(counter.add(2).subtract(4));

interface User1  {
    name: string,
    age: number,
    admin: boolean,
    privacy: never
}
// string | number | boolean
// 不包含：null、undefined、never
type User1Type = User1[keyof User1];

// 映射类型
type ReadonlyType<T> = {
    readonly [P in keyof T]: T[P]
}
// 把 User1 的属性全设为只读
type ReadonlyUser1 = ReadonlyType<User1>;

// 内置映射类型
// https://www.typescriptlang.org/docs/handbook/utility-types.html
type ReadonlyUser = Readonly<User1>;
type UserName = Pick<User1, 'name' | 'age'>;
type PartialUser = Partial<User1>;
// ......

// 条件类型
type MyExclude<T, U> = T extends U ? never : T;
type T0 = MyExclude<string | number | boolean, string | boolean>
type TUserProp = MyExclude<keyof User1, 'name'>
// 条件类型中的类型推断
// Array<infer U> 推断出数组元素的类型
type ArrayItemType<T> = T extends Array<infer U> ? U : T;
type T1 = ArrayItemType<string[]> // string
