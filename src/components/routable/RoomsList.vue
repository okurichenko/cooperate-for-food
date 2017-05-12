<template>
  <div class="rooms-list">
    <h3>Rooms list</h3>
    <hr>
    <router-link v-for="room in rooms" tag="div" :to="{ name: 'room-view', params: { id: room['.key'] }}" class="panel panel-primary">
      <div class="panel-body">
        {{room.title}}
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'rooms-list',
  computed: {
    rooms () {
      return this.$store.state.rooms
    }
  }
}
</script>
