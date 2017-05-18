<template>
  <div class="rooms-list">
    <h3>Rooms list <router-link :to="{ name: 'room-add' }" tag="button" class="btn btn-primary btn-sm">Add</router-link></h3>
    <hr>
    <router-link v-for="(room, index) in rooms" tag="div" :key="index" :to="{ name: 'room-view', params: { id: room['.key'] }}" class="panel panel-primary">
      <div class="panel-body">
        {{room.title}} - {{index}}
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
