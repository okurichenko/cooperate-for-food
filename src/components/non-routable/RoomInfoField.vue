<template>
  <p v-if="value"><b>{{label}}:</b> {{value}}</p>
</template>

<script>
  export default {
    props: ['label', 'value']
  }
</script>
