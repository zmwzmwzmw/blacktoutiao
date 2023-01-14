import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import Api from '@/api/index'
import 'vant/lib/index.less'

Vue.use(Vant)
Vue.prototype.$Api = Api

Vue.config.productionTip = false

new Vue({
  router,

  render: h => h(App)
}).$mount('#app')
