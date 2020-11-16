// 命名空间即内部模块，是没推出 ES6 模块时的产物
// 目前不推荐使用，ES6 模块可以完全代替命令空间
namespace Validation {
    const isLetterReg = /^[A-Za-z]+$/;

    const isNumberReg = /^[0-9]+$/;

    export const checkLetter = (text: string): boolean => {
        return isLetterReg.test(text);
    }

    export const checkNumber = (text: string): boolean => {
        return isNumberReg.test(text);
    }
}
