// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import store from './store/store'
import firebaseApp from './store/firebase'

Vue.config.productionTip = false

const db = firebaseApp.database()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  computed: Vuex.mapGetters([
    'rooms'
  ]),
  firebase: {
    rooms: db.ref('rooms')
  }
})
