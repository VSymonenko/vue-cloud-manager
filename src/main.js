import Vue from 'vue'
import App from './App'
import { store } from './vuex/store'
// import vueCloudManager from '../dist/vue-cloud-manager' // test

// Vue.use(vueCloudManager) // test

Vue.config.productionTip = false

Vue.prototype.$eventsVCM = new Vue()
/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
const VCM = new Vue({
  el: '#vue-cloud-manager',
  store,
  render: VCM => VCM(App)
})
