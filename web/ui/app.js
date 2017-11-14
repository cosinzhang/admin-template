import "element-ui/lib/theme-default/index.css"
import "font-awesome/css/font-awesome.css"
import "./app.less"

import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import moment from 'moment'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import App from "./components/index"
import routes from './modules/routes'
import 'selectize'
import 'selectize/dist/css/selectize.default.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import store from './modules/store'
import VueCodeMirror from 'vue-codemirror'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(iView);
Vue.component('icon', Icon)
Vue.use(VueCodeMirror)

moment.locale('zh-cn');

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  el: "#wrapper",
  template: "<App/>",
  components: {
    App
  },
  router,
  store
})