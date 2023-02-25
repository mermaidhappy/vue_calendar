const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    //设置代理，解决跨域获取数据的问题
    proxy: {
      '/api': {
        target: 'http://v.juhe.cn',
        changeOrigin: true,
        ws: true, //websocket,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
    //关闭esLint蒙层提示,不可用了
    // overlay: {
    //   warnings: false,
    //   errors: false,
    // },
  },

  //关闭esLint检查
  lintOnSave: false,
});
