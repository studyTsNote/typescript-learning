// 可选参数
function addFn(x: number, y: number, z?: number): number {
    return x + y + (z ? z : 0);
}
// console.log(addFn(1, 2)); // 3
// console.log(addFn(1, 2, 3)); // 6

// 默认值
function addFn2(x: number, y = 3): number {
    return x + y;
}
// console.log(addFn2(1)); // 4
// console.log(addFn2(1, 5)); // 6

// 不定数参数
function addFn3(x: number, ...args: number[]): number {
    return x + args.reduce((a, b) => a + b, 0);
}
console.log(addFn3(1));
console.log(addFn3(1, 2, 3, 4));
