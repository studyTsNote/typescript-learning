const shell = require('shelljs');

// 拷贝静态资源到 dist 目录
shell.cp('-R', './public/', './dist/');
shell.cp('-R', './views/', './dist/');
