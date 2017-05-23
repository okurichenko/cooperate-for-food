<template>
  <div class="well chat-window">
    <p v-for="message in messages"><b>{{message.userName}} ({{message.time | timeFormatted}}):</b> {{message.text}}</p>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    props: ['messages'],
    filters: {
      timeFormatted (value) {
        return moment(value).format('HH:mm')
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.$el.scrollTop = this.$el.scrollHeight
      })
    },
    updated () {
      this.$nextTick(() => {
        this.$el.scrollTop = this.$el.scrollHeight
      })
    }
  }
</script>

<style scope>
  .chat-window {
    height: calc(80vh - 3rem);
    overflow: auto;
  }

  .chat-window p:last-of-type {
    padding-bottom: 1.5rem;
  }
</style>
