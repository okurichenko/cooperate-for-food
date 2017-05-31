<template>
  <div class="col-xs-6 col-xs-offset-3 pushed">
    <div class="form-group">
      <label for="company">Company</label>
      <input type="text" v-model="company" input="company" class="form-control" v-on:input="checkCompany">
    </div>
    <div v-if="companyApproved">
      <button class="btn btn-default btn-block" @click="signIn">
        Sign in with <i class="fa fa-google"></i>oogle
      </button>
    </div>
  </div>
</template>

<script>
  import firebaseApp from '@/store/firebase'
  import firebase from 'firebase'

  export default {
    name: 'sign-in',
    data () {
      return {
        company: 'lits',
        companyApproved: true,
        isSearching: false
      }
    },
    methods: {
      signIn () {
        var provider = new firebase.auth.GoogleAuthProvider()
        provider.addScope('profile')
        provider.addScope('email')
        localStorage.setItem('company', this.company)
        firebaseApp.auth().signInWithPopup(provider)
      },
      checkCompany () {
        if (!this.isSearching) {
          setTimeout(() => {
            this.isSearching = true
            this.$http.get(`https://us-central1-cooperate-for-food.cloudfunctions.net/check_company?company=${this.company}`).then(() => {
              this.companyApproved = true
            }).catch(() => {
              this.companyApproved = false
            }).finally(() => {
              this.isSearching = false
            })
          }, 500)
        }
      }
    }
  }
</script>
