export default {
  beforeCreate () {
    if (!this.$store.state.user) {
      console.log('replacing')
      this.$router.replace('/sign-in')
    }
  }
}
