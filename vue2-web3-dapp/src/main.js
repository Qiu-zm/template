import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//初始化web3
// import {web3} from './utils/web3'
// Vue.prototype.web3 = web3
// 全局引入按需引入UI库 vant
import '@/plugins/vant'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
