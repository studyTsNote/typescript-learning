// 为第三方库编写声明文件，详见 types 文件夹
// 这里以 indexOf 库为示例
import indexOf from 'indexof';

const arr = [1, 2, 'abc', 4];
console.log(
    indexOf(arr, 'abc'),
    indexOf(arr),
    indexOf(arr, 4)
);
