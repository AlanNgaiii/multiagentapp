import Vue from 'vue'
import App from './App-pc.vue'
import router from './router/router-pc'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
