import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/routable/Home'
import RoomsList from '@/components/routable/RoomsList'
import RoomView from '@/components/routable/RoomView'
import RoomAdd from '@/components/routable/RoomAdd'
import SignIn from '@/components/routable/SignIn'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignIn
    },
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'room-list',
          component: RoomsList
        },
        {
          path: 'add',
          name: 'room-add',
          component: RoomAdd
        },
        {
          path: ':id',
          name: 'room-view',
          component: RoomView
        },
        {
          path: 'archive',
          name: 'archive',
          component: { template: '<div>{{$store.state.user.displayName}}\'s archive</div>' }
        }
      ]
    }
  ]
})
