<template>
  <div id="app" class="container">
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

export default {
  name: 'app',
  computed: {
    ...mapState(['user'])
  },
  beforeCreate () {
    firebaseApp.auth().onAuthStateChanged((user) => {
//       initially user = null, after auth it will be either <fb_user> or false
      this.$store.commit('setUser', user || false)
      if (user && this.$route.path === '/sign-in') {
        this.$router.replace('/')
      } else if (!user && this.$route.path !== '/sign-in') {
        this.$router.replace('/sign-in')
      }
    })
  }
}
</script>
