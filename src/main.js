// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入MintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
// 引入mui的样式
import "./assets/mui/css/mui.css"
import "./assets/mui/css/icons-extra.css"
//引入preview样式
import VuePreview from 'vue-preview'

// defalut install
Vue.use(VuePreview)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
