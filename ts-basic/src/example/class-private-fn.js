/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// 私有方法

const fn = Symbol('fn');

export default class Point {
    constructor() {
        this.x = 0;
    }

    [fn] () {
        console.log('我只能内部使用');
    }
}