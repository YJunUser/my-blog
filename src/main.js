import Vue from 'vue'
import App from './App.vue'
import router from './router'
// eslint-disabled

Vue.config.productionTip = false
import '@/assets/css/base.scss' // base style

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
