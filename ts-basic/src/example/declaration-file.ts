console.log(documentTitle);
setTitle('Test');
console.log(documentTitle);

import '../modules/levelup';
const name = 'jack';
console.log(name.getFirstLetter());

// 测试一下自己封装的库
import arrayMap from '@orez/array-map';
const arr = arrayMap([1, 2, 3], (item) => {
    return item ** 2;
});
console.log(arr);
