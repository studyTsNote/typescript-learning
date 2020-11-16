interface NameInfo {
    firstName: string,
    lastName: string
}

function getFullName({ firstName, lastName }: NameInfo): string {
    return `${firstName} ${lastName}`;
}

getFullName({
    firstName: 'just',
    lastName: 'orez'
});

// 可选类型、只读类型
interface Vegetable {
    color?: string, // 可选
    readonly type: string // 只读
}

function getVegetableInfo({ color, type}: Vegetable): string {
    return `A ${color ? color : ''} ${type}`;
}
const tomato = {
    color: 'red',
    type: 'tomato'
}
console.log(getVegetableInfo(tomato));

// 函数类型
// interface AddFn {
//     (n: number, m: number): number
// }
type AddFn = (n: number, m: number) => number;
const add: AddFn = (n, m) => n + m;
console.log(add(1, 2));

// 定义对象属性只能为数值型
interface RoleDic {
    [id: number]: string
}
const roles1: RoleDic = {
    0: 'admin',
    1: 'user'
}

// 接口继承
interface Tomato extends Vegetable {
    radius: number
}
const tomato1: Tomato = {
    radius: 5,
    type: 's'
}
