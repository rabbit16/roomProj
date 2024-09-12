
// #ifndef VUE3
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif
import {$http} from '@escook/request-miniprogram'
uni.$http = $http
$http.baseUrl = "http://127.0.0.1:9999"  // 定义基础的路由  https://api-hmugo-web.itheima.net
// #ifdef VUE3


import { createSSRApp } from 'vue'
import App from './App.vue'


export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif