// import Vue from 'vue'

import './stylus/index.styl'

import App from './App.vue'

import router from './router/router'

import Tab from './common/Tab.vue'
import Slider from './common/Slider.vue'

import preview from 'vue-photo-preview'

Vue.component('tab', Tab)
Vue.component('slider', Slider)

Vue.use(preview, {
  bgOpacity: 0.3
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
