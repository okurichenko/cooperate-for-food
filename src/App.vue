<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-xs-12">
        <div>
          <button class="btn btn-danger" @click="logout">Logout</button>
        </div>
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
  methods: {
    logout () {
      firebaseApp.auth().signOut()
    }
  },
  beforeCreate () {
    firebaseApp.auth().onAuthStateChanged((user) => {
//       initially user = null, after auth it will be either <fb_user> or false
      if (user && this.$route.path === '/sign-in') {
        this.$router.replace('/')
      } else if (!user && this.$route.path !== '/sign-in') {
        this.$router.replace('/sign-in')
      }
    })
  }
}
</script>
