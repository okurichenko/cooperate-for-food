// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import store from './store/store'
import firebaseApp from './store/firebase'
import VueResource from 'vue-resource'
import moment from 'moment'

Vue.use(VueResource)

Vue.config.productionTip = false

Vue.filter('formattedDate', function (value) {
  return moment(value).format('HH:mm, MMM Do')
})

const db = firebaseApp.database()

/* eslint-disable no-new */
firebaseApp.auth().onAuthStateChanged((user) => {
  let promise = Promise.resolve()
  let firebase = {}
  if (user) {
    const company = localStorage.getItem('company')
    store.state.user = user
    store.state.company = company
    promise = user.getToken().then((token) => {
      store.state.accessToken = token
    })
    firebase.rooms = db.ref(`/${company}/rooms`)
  }

  return promise.then(() => {
    new Vue({
      el: '#app',
      router,
      store,
      template: '<App/>',
      components: { App },
      computed: Vuex.mapGetters([
        'rooms'
      ]),
      firebase
    })
  })
})
