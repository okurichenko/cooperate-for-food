<template>
  <div class="room-view" v-if="room">
    <div class="col-xs-3">
      <h3>{{room.title}}</h3>
      <hr>
      <app-room-info-field label="Description" :value="room.description"></app-room-info-field>
      <app-room-info-field label="Indoor" :value="room.indoor?'Indoor':'Out'"></app-room-info-field>
      <app-room-info-field label="Place" :value="room.place.name"></app-room-info-field>
      <app-room-info-field label="Time" :value="room.timeArranged | formattedDate"></app-room-info-field>
      <app-room-info-field label="Comment" :value="room.comment"></app-room-info-field>
    </div>
    <div class="col-xs-6">
      <div class="well chat-window">
        <p v-for="message in room.discussion"><b>{{message.userName}} ({{message.time | formattedDate}}):</b> {{message.text}}</p>
      </div>
      <div class="row">
        <div class="col-xs-9">
          <input type="text" v-model="messageText" class="form-control chat-field" v-on:keydown="keyPressed">
        </div>
        <div class="col-xs-3">
          <button class="btn btn-primary btn-block">Send</button>
        </div>
      </div>
    </div>
    <div class="col-xs-3">
      orderitems
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  import RoomInfoField from '@/components/non-routable/RoomInfoField'

  export default {
    name: 'room-view',
    data () {
      return {
        messageText: ''
      }
    },
    components: {
      appRoomInfoField: RoomInfoField
    },
    computed: {
      room () {
        const roomId = this.$route.params.id
        return this.$store.state.rooms.find((room) => room['.key'] === roomId)
      }
    },
    methods: {
      keyPressed (e) {
        if (e.which === 13) {
          console.log('123123')
          const userName = this.$store.state.user.displayName
          const text = this.messageText
          this.$store.dispatch('addMessage', [this.room['.key'], {
            userName,
            text,
            time: moment().format()
          }])
        }
      }
    }
  }
</script>

<style scope>
  .room-view {
    height: 80vh;
  }

  .chat-window {
    height: calc(80vh - 3rem);
    overflow: auto;
  }

  .chat-field {

  }
</style>
