// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'


import App from './App'

import router from './router'
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$VueQuillEditor = VueQuillEditor


Vue.use(VueQuillEditor)

Vue.use(ElementUI, {
  locale
})


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
