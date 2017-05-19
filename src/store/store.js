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
    user: null,
    company: null
  },
  mutations: {
    ...VuexFire.mutations
  },
  actions: {
    createRoom (store, room) {
      return db.ref('/rooms').push(room)
    },
    addRoom (store, room) {
      return db.ref(`/${store.state.company}/rooms`).push(room)
    },
    addMessage (store, [roomId, message]) {
      return db.ref(`/${store.state.company}/rooms/${roomId}/discussion`).push(message)
    }
  },
  getters: {
  }
})
