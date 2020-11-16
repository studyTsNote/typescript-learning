module.exports = {
  chainWebpack: config => {
    // 因为 antdv bug 缺少了 space 组件的声明文件，所以将 main.ts 改为 main.js
    // 然后手动修改构建的入口文件
    config.entry('app').clear().add('./src/main.js')
  },
  productionSourceMap: true,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
}
