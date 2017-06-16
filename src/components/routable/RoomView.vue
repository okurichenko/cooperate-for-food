<template>
  <div class="room-view" v-if="room">
    <h3>{{room.title}} <router-link :to="{ name: 'room-list' }" tag="button" class="btn btn-primary btn-sm">Back</router-link></h3>
    <hr>
    <div class="col-xs-3">
      <app-room-info-field label="Description" :value="room.description"></app-room-info-field>
      <app-room-info-field label="Indoor" :value="room.indoor?'Yes':'Out'"></app-room-info-field>
      <app-room-info-field label="Place" :value="room.place.name"></app-room-info-field>
      <app-room-info-field label="Time" :value="room.timeArranged | formattedDate"></app-room-info-field>
      <app-room-info-field label="Comment" :value="room.comment"></app-room-info-field>
      <hr>
      <button v-if="room.hostId === ownUid" class="btn btn-success btn-block" @click="toggleRoomLock" v-text="room.locked?'Unlock':'Lock'"></button>
      <br>
      <button v-if="room.hostId === ownUid" class="btn btn-danger btn-block" @click="removeRoom">Remove room</button>
    </div>
    <div :class="!!room.indoor?'col-xs-6':'col-xs-9'">
      <app-chat-window :messages="room.discussion"></app-chat-window>
      <div class="row">
        <div class="col-xs-9">
          <input type="text" v-model="messageText" class="form-control chat-field" v-on:keydown="keyPressed">
        </div>
        <div class="col-xs-3">
          <button class="btn btn-primary btn-block" @click="sendMessage">Send</button>
        </div>
      </div>
    </div>
    <div class="col-xs-3" v-if="!!room.indoor">
      <div class="row">
        <div class="col-xs-12" v-for="user in room.orderItems">
          <h5>{{user.name}}</h5>
          <div class="row" v-for="(order, index) in user.orders">
            <div class="col-xs-8">{{order.name}}</div>
            <div class="col-xs-2">{{order.price}}</div>
            <div class="col-xs-2 text-center" v-if="!room.locked && (user.id == ownUid)" @click="removeItem(index)">-</div>
          </div>
          <app-order-item-adder @itemAdded="itemAdded" v-if="!room.locked && (user.id == ownUid)"></app-order-item-adder>
          <div class="row total">
            <div class="col-xs-8">Total:</div>
            <div class="col-xs-2">{{user.orders | totalFilter}}</div>
          </div>
        </div>
      </div>
      <div class="row" v-if="!presentInOrders && !room.locked">
        <app-order-item-adder @itemAdded="itemAdded"></app-order-item-adder>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  import ChatWindow from '@/components/non-routable/ChatWindow'
  import OrderItemAdder from '@/components/non-routable/OrderItemAdder'
  import RoomInfoField from '@/components/non-routable/RoomInfoField'

  export default {
    name: 'room-view',
    filters: {
      totalFilter (order) {
        let sum = 0
        let orderArray = order || []
        orderArray.forEach((o) => {
          sum += parseFloat(o.price)
        })
        return sum
      }
    },
    data () {
      return {
        messageText: ''
      }
    },
    components: {
      appChatWindow: ChatWindow,
      appOrderItemAdder: OrderItemAdder,
      appRoomInfoField: RoomInfoField
    },
    computed: {
      room () {
        const roomId = this.$route.params.id
        return this.$store.state.rooms.find((room) => room['.key'] === roomId)
      },
      ownUid () {
        return this.$store.state.user.uid
      },
      presentInOrders () {
        let usersOrders = this.room.orderItems || []
        return !!usersOrders.find((user) => user.id === this.ownUid)
      }
    },
    methods: {
      keyPressed (e) {
        if (e.which === 13) {
          this.sendMessage()
        }
      },
      sendMessage () {
        const userName = this.$store.state.user.displayName
        const text = this.messageText
        if (text.trim()) {
          this.$store.dispatch('addMessage', [this.room['.key'], {
            userName,
            text,
            time: moment().format()
          }])
          this.messageText = ''
        }
      },
      removeRoom () {
        if (confirm('Are you sure, you want to remove this room?')) {
          this.$store.dispatch('removeRoom', this.room['.key']).then(() => {
            this.$router.replace('/')
          })
        }
      },
      itemAdded (data) {
        this.$store.dispatch('addOrderItem', [this.room, data])
      },
      removeItem (index) {
        this.$store.dispatch('removeOrderItem', [this.room, index])
      },
      toggleRoomLock () {
        this.$store.dispatch('setRoomLock', [this.room['.key'], !this.room.locked])
      }
    }
  }
</script>

<style scoped>
  .room-view {
    height: 80vh;
  }

  .total {
    border-top: dotted 1px #ccc;
    border-bottom: solid 1px #ccc;
    padding: .5rem 0;
    margin-bottom: 2rem;
  }
</style>
