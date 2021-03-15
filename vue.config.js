
module.exports = {
  publicPath: '.',
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        views: '@/views',
        components: '@/components',
        layout: '@/layout',
        utils: '@/utils'
      }
    },
    externals: {
      impress: 'impress'
    }
  },
  css: {
    loaderOptions: {
      sass: {
        // 根据自己样式文件的位置调整 全局引入定义的scss变量 可以在任何vue文件中使用
        additionalData: `@import "@/assets/css/variables.scss";`
      }
    }
  },
  productionSourceMap: false
}
