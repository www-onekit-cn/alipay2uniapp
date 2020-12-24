import Vue from 'vue'
import App from './App'
import alipay2uniapp from "../alipay2uniapp"
Vue.use(alipay2uniapp);

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
