<template>
  <input type="text" ref="input" :id="inputId" v-model="googleValue" class="form-control">
</template>

<script>
  export default {
    props: ['inputId'],
    data () {
      return {
        autocomplete: null,
        googleValue: ''
      }
    },
    mounted () {
      console.log(this.$store.state.user.accessToken)
      this.autocomplete = new window.google.maps.places.Autocomplete(this.$refs.input, {
        types: ['establishment'],
        componentRestrictions: {country: 'ua'}
      })
      this.autocomplete.addListener('place_changed', () => {
        const place = this.autocomplete.getPlace()
        if (place) {
          this.$emit('placeChanged', place)
        }
      })
    }
  }
</script>
