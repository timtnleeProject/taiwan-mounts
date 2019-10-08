import Vue from 'vue'
import App from './App.vue'
import data from './mounts.json'

Vue.config.productionTip = false

Vue.prototype.$mounts = data

new Vue({
  render: h => h(App)
}).$mount('#app')
