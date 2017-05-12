import Vue from 'vue'
import Vuex from 'vuex'
import VuexFire from 'vuexfire'
import firebaseApp from '@/store/firebase'

Vue.use(Vuex)
Vue.use(VuexFire)

const db = firebaseApp.database()

export default new Vuex.Store({
  state: {
    rooms: null,
    user: null
  },
  mutations: {
    ...VuexFire.mutations,
    setUser (state, value) {
      state.user = value
    }
  },
  actions: {
    createRoom (store, room) {
      return db.ref('/rooms').push(room)
    }
  },
  getters: {
  }
})
