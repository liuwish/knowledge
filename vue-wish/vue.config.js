// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   configureWebpack: {
//     devtool: 'source-map'
//   }
// })

let path=require('path');
function resolve(dir){
    return path.join(__dirname,dir)
}
module.exports = {
    chainWebpack: config => {
        //设置别名
        config.resolve.alias
        .set('@',resolve('src'))
    },
    devServer: {
        open:true  //打开浏览器窗口
    },
    //定义scss全局变量
    css: {
        loaderOptions: {
          sass: {
            data: `@import "@/assets/scss/global.scss";`
          }
        }
      }
}