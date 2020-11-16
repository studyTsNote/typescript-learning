// 模拟一个全局第三方库
// 手动为其编写声明文件

let documentTitle;

function setTitle(title) {
    document && (document.title = title);
    documentTitle = getTitle();
}

function getTitle() {
    return document ? document.title : '';
}

console.log('[doctitle.js] loaded');
documentTitle = getTitle();
