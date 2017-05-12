<template>
  <div class="col-xs-6 col-xs-offset-3 pushed">
    <button class="btn btn-default btn-block" @click="signIn">
      Sign in with <i class="fa fa-google"></i>oogle
    </button>
  </div>
</template>

<script>
  import firebaseApp from '@/store/firebase'
  import firebase from 'firebase'

  export default {
    name: 'sign-in',
    methods: {
      signIn () {
        var provider = new firebase.auth.GoogleAuthProvider()
        provider.addScope('profile')
        provider.addScope('email')
        firebaseApp.auth().signInWithPopup(provider).then((result) => {
          // This gives you a Google Access Token.
//          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user
          this.$store.state.user = user
        })
      }
    }
  }
</script>
