import Vue from 'vue'
import core from './core'
import init from './core/init'
import { store } from './vuex/store'
import vueCloudManager from './components/vueCloudManager/vueCloudManager'
import vcmButton from './components/vcmButton/vcmButton'
import vcmForm from './components/vcmForm/vcmForm'

Vue.component('vcm-button', vcmButton)
Vue.component('vcm-form', vcmForm)

Vue.config.productionTip = false
Vue.prototype.$core = core
Vue.prototype.$eventsVCM = new Vue()

/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
const VCM = new Vue({
  el: '#app',
  store,
  mixins: [init],
  render: app => app(vueCloudManager)
})

export default VCM
