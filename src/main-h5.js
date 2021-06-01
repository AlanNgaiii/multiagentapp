import Vue from 'vue'
import App from './App-h5.vue'
import router from './router/router-h5'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
