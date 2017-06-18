<template>
  <div id="app" class="container">
    <app-notifications-bar></app-notifications-bar>
    <div class="row">
      <div class="col-xs-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import firebaseApp from '@/store/firebase'
import { mapState } from 'vuex'
import NotificationsBar from '@/components/non-routable/NotificationsBar'

export default {
  name: 'app',
  components: {
    appNotificationsBar: NotificationsBar
  },
  computed: {
    ...mapState(['user'])
  },
  beforeCreate () {
    firebaseApp.auth().onAuthStateChanged((user) => {
//       initially user = null, after auth it will be either <fb_user> or false
      if (user && this.$route.path === '/sign-in') {
        this.$router.replace({ name: 'room-list' })
      } else if (!user && this.$route.path !== '/sign-in') {
        this.$router.replace({ name: 'sign-in' })
      }
    })
  }
}
</script>
