import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Input, Button, Icon, Checkbox, Space } from 'ant-design-vue'

Vue.use(Input)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Checkbox)
Vue.use(Space)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
