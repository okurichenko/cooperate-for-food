<template>
  <div id="room-add">
    <h3>Add new room</h3>
    <form class="form-horizontal">
      <div class="col-xs-4 col-xs-offset-4">
        <button class="btn btn-primary btn-block" @click.prevent="submitForm">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'room-add',
    data () {
      return {
        title: '',
        description: '',
        indoor: true,
        timeCreated: (new Date().getTime()),
        place: {
          googleId: '',
          name: '',
          url: ''
        },
        orderItems: [],
        discussion: [],
        deliveryPrice: 0
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
        console.log('submitted')
      }
    },
    computed: {
      total () {
        return this.orderItems.reduce((a, b) => a + b.price) + this.deliveryPrice
      }
    }
  }
</script>
