import Vue from 'vue'
import App from './App'
import { store } from './vuex/store'
// import vueCloudManager from '../dist/vue-cloud-manager' // test

// Vue.use(vueCloudManager) // test

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#vue-cloud-manager',
  store,
  render: h => h(App)
})
