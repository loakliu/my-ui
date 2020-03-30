import Vue from 'vue'
import App from './App.vue'
import MButton from './components/Button.vue'
import MDialog from './components/Dialog.vue'
import MInput from './components/Input.vue'
import MSwitch from './components/Switch.vue'
import MRadio from './components/Radio.vue'
import MRadioGroup from './components/RadioGroup.vue'

Vue.component(MButton.name, MButton)
Vue.component(MDialog.name, MDialog)
Vue.component(MInput.name, MInput)
Vue.component(MSwitch.name, MSwitch)
Vue.component(MRadio.name, MRadio)
Vue.component(MRadioGroup.name, MRadioGroup)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
