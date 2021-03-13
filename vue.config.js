
const path = require('path');
function resolve (dir) {
  return path.join(__dirname, '.', dir);
}

module.exports = {
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
    }
  },
  // ...
  css: {
    loaderOptions: {
      sass: {
        // 根据自己样式文件的位置调整 全局引入定义的scss变量 可以在任何vue文件中使用
        additionalData: `@import "@/assets/css/variables.scss";`
      }
    }
  },
   // icon的设置
  chainWebpack: config => {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end();

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      });
  }
}
