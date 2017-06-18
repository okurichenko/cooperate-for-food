<template>
  <div>
    <nav-bar :company="company" :username="username" :logout="logout" />
    <router-view />
  </div>
</template>

<script>
  import firebaseApp from '@/store/firebase'
  import NavBar from '@/components/non-routable/NavBar'

  export default {
    name: 'home',
    components: {
      NavBar
    },
    methods: {
      logout () {
        firebaseApp.auth().signOut()
      }
    },
    computed: {
      company () {
        return this.$store.state.company
      },
      username () {
        return this.$store.state.user.displayName
      }
    }
  }
</script>
