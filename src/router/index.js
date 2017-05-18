import Vue from 'vue'
import Router from 'vue-router'
import RoomsList from '@/components/routable/RoomsList'
import RoomView from '@/components/routable/RoomView'
import RoomAdd from '@/components/routable/RoomAdd'
import SignIn from '@/components/routable/SignIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'room-list',
      component: RoomsList
    },
    {
      path: '/:id',
      name: 'room-view',
      component: RoomView
    },
    {
      path: '/add',
      name: 'room-add',
      component: RoomAdd
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignIn
    }
  ]
})
