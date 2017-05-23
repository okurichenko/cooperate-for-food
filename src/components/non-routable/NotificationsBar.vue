<template>
  <div id="notifications-wrapper">
    <div v-for="notification in notifications">
      <div :class="`alert alert-${notification.status}`">
        {{notification.text}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        notifications: []
      }
    }
  }
</script>

<style scope>
  #notifications-wrapper {
    position: fixed;
    top: 1rem;
    right: 1rem;
    width: 300px;
  }
</style>
