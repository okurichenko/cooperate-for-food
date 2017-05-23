<template>
  <div class="rooms-list">
    <h3>Rooms list <router-link :to="{ name: 'room-add' }" tag="button" class="btn btn-primary btn-sm">Add</router-link></h3>
    <hr>
    <router-link v-for="(room, index) in rooms" tag="div" :key="index" :to="{ name: 'room-view', params: { id: room['.key'] }}" class="panel panel-primary">
      <div class="panel-body">
        <h4>{{room.title}}</h4>
        <app-room-info-field label="Description" :value="room.description"></app-room-info-field>
        <app-room-info-field label="Indoor" :value="room.indoor?'Indoor':'Out'"></app-room-info-field>
        <app-room-info-field label="Place" :value="room.place.name"></app-room-info-field>
        <app-room-info-field label="Time" :value="room.timeArranged | formattedDate"></app-room-info-field>
        <app-room-info-field label="Comment" :value="room.comment"></app-room-info-field>
      </div>
    </router-link>
  </div>
</template>

<script>
  import moment from 'moment'
  import RoomInfoField from '@/components/non-routable/RoomInfoField'

  export default {
    name: 'rooms-list',
    components: {
      appRoomInfoField: RoomInfoField
    },
    computed: {
      rooms () {
        const now = moment()
        return this.$store.state.rooms.filter((room) => {
          return now.isSameOrBefore(moment(room.timeArranged))
        })
      }
    }
  }
</script>
