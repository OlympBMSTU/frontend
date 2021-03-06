'use strict'

import Vue from 'vue'
import App from './App'

import router from './modules/router'
import store from './store'
import VeeValidate from 'vee-validate'
import VeeValidateRu from './const/VeeValidateRu'

import filterClock from './filters/clock'

Vue.filter('clock', filterClock)

Vue.use(VeeValidate, {
  inject: false,
  validator: 'new',
  locale: 'ru',
  dictionary: {
    ru: {
      messages: VeeValidateRu.messages,
      attributes: VeeValidateRu.attributes
    }
  }
})

const vueAppElement = document.querySelector('#vue-app')

window.vueApp = new Vue({
  el: vueAppElement || document.body,
  data: {
    rsk: '6LfhW20UAAAAADa9DGJSwkbulFIWSKhkSS-N0Glo'
  },
  store,
  components: { App },
  template: '<App />',
  router,
  created () {
    console.warn('Vue started')
  }
})
