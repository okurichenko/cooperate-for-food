<template>
  <div id="room-add" class="col-xs-12">
    <h3>Add new room <router-link tag="button" to="/" class="btn btn-primary btn-sm">Back</router-link></h3>
    <form class="form-horizontal">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" id="title" class="form-control" v-model="room.title">
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea id="description" class="form-control" v-model="room.description"></textarea>
      </div>
      <div class="form-group">
        <label for="time">Time</label>
        <input type="time" id="time" class="form-control" step="300" v-model="time">
      </div>
      <div class="form-group">
        <label for="indoor">
          <input type="checkbox" id="indoor" v-model="room.indoor"> Indoor
        </label>
      </div>
      <hr>
      <div class="place">
        <div class="form-group" v-if="!room.indoor">
          <label for="place-google-autocomplete">Address</label>
          <app-autocomplete-field @placeChanged="googlePlaceChanged" inputId="place-google-autocomplete"></app-autocomplete-field>
        </div>
        <div class="form-group">
          <label for="place-name">Name</label>
          <input type="text" id="place-name" class="form-control" v-model="room.place.name">
        </div>
        <div class="form-group">
          <label for="place-url">Website</label>
          <input type="text" id="place-url" class="form-control" v-model="room.place.url">
        </div>
        <div class="form-group" v-if="room.deliveryPrice">
          <label for="place-delivery-price">Delivery price, UAH</label>
          <input type="number" id="place-delivery-price" class="form-control" v-model="room.deliveryPrice">
        </div>
      </div>
      <hr>
      <div class="form-group">
        <label for="comment">Comment</label>
        <textarea id="comment" rows="4" class="form-control" v-model="room.comment"></textarea>
      </div>
      <hr>
      <div class="col-xs-4 col-xs-offset-4">
        <button class="btn btn-primary btn-block" @click.prevent="submitForm">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
  import moment from 'moment'
  import AutocompleteField from '@/components/non-routable/AutocompleteField'
  import AuthenticatedRouteMixin from '@/mixins/AuthenticatedRouteMixin'

  export default {
    name: 'room-add',
    mixins: [AuthenticatedRouteMixin],
    components: {
      appAutocompleteField: AutocompleteField
    },
    data () {
      return {
        room: {
          title: '',
          description: '',
          indoor: true,
          timeCreated: null,
          place: {
            googleId: '',
            name: '',
            url: ''
          },
          timeArranged: null,
          hostId: this.$store.state.user.uid,
          orderItems: [],
          discussion: [],
          deliveryPrice: 0,
          comment: ''
        },
        time: '',
        googlePlace: null
      }
    },
    methods: {
      addOrderItem () {
        this.orderItems.push({
          name: '',
          price: 0,
          userId: this.$store.state.user.uid
        })
      },
      submitForm () {
        const [hours, minutes] = this.time.split(':')
        this.room.timeCreated = moment().format()
        this.room.timeArranged = moment().startOf('day').hours(hours).minutes(minutes).format()
        this.$store.dispatch('addRoom', this.room)
      },
      googlePlaceChanged (place) {
        this.room.place.googleId = place.place_id
        this.room.place.url = place.website
        this.room.place.name = place.name
        this.googlePlace = place
      }
    },
    computed: {
      total () {
        return this.orderItems.reduce((a, b) => a + b.price) + this.deliveryPrice
      }
    }
  }
</script>
