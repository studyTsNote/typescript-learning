"use strict";
exports.__esModule = true;
var dist_1 = require("../dist");
var arr = dist_1["default"]([1, 'a', 2, 'c'], function (item) {
    return typeof item === 'number' ? item + 1 : item + "1";
});
console.log(arr);
