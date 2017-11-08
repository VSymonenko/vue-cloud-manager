import Vue from 'vue';
import App from './App';
// import vueCloudManager from '../dist/vue-cloud-manager'; // test

// Vue.use(vueCloudManager); // test

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
});
