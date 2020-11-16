// 模拟一些修改原型的第三方库
// 影响全局

String.prototype.getFirstLetter = function() {
    return this[0];
}