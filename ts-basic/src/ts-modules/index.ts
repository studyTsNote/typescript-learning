// ts 特有的写法
// import A = require('./a');
// console.log(A);

// 无法直接被 webpack 编译使用
// 如何引入命名空间，详见：https://www.typescriptlang.org/docs/handbook/namespaces.html#multi-file-namespaces
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./validation.ts"/>
// console.log(Validation.checkNumber('abc233'));
