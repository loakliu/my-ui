import Vue from 'vue'
import App from './App.vue'

import JH_UI from '../packages'
Vue.use(JH_UI)

// Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
