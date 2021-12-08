import Vue from 'vue'
import App from './App.vue'
// import BootstrapVue from 'bootstrap-vue'
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-icons/icons/arrow-down.svg'
import 'bootstrap-icons/font/bootstrap-icons.css'
// Vue.use(BootstrapVue)
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
