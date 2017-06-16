import Vue from 'vue'
import Vuex from 'vuex'
import VuexFire from 'vuexfire'
import firebaseApp from '@/store/firebase'
import { sendNewRoom } from '../services/messages-notifcation'

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
      sendNewRoom(store.state.company, store.state.user.displayName, store.state.user.photoURL, room.title)
      return db.ref(`/${store.state.company}/rooms`).push(room)
    },
    addMessage (store, [roomId, message]) {
      return db.ref(`/${store.state.company}/rooms/${roomId}/discussion`).push(message)
    },
    removeRoom (store, roomId) {
      return db.ref(`/${store.state.company}/rooms/${roomId}`).remove()
    },
    addOrderItem (store, [room, data]) {
      const uid = store.state.user.uid
      let usersOrders = room.orderItems
      if (!usersOrders) {
        usersOrders = []
      }
      let userOrders = usersOrders.find((user) => user.id === uid)
      if (!userOrders) {
        userOrders = {
          id: uid,
          name: store.state.user.displayName,
          orders: [data]
        }
        usersOrders.push(userOrders)
      } else {
        if (userOrders.orders) {
          userOrders.orders.push(data)
        } else {
          userOrders.orders = [data]
        }
      }
      return db.ref(`/${store.state.company}/rooms/${room['.key']}/orderItems`).set(usersOrders)
    },
    removeOrderItem (store, [room, index]) {
      const uid = store.state.user.uid
      let usersOrders = room.orderItems
      if (!usersOrders) {
        usersOrders = []
      }
      let userOrders = usersOrders.find((user) => user.id === uid)
      userOrders.orders.splice(index, 1)
      if (!userOrders.orders.length) {
        const userOrdersIndex = usersOrders.findIndex((user) => user.id === uid)
        usersOrders.splice(userOrdersIndex, 1)
      }
      return db.ref(`/${store.state.company}/rooms/${room['.key']}/orderItems`).set(usersOrders)
    },
    setRoomLock (store, [roomId, value]) {
      return db.ref(`/${store.state.company}/rooms/${roomId}/locked`).set(value)
    }
  },
  getters: {
  }
})
