import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueClipboard)
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
