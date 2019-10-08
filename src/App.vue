<template>
  <div id="app">
    <mounts-table :mounts="mounts" />
  </div>
</template>

<script>
import MountsTable from '@/components/MountsTable'

export default {
  name: 'app',
  components: {
    MountsTable
  },
  computed: {
    mounts () {
      return this.$mounts
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
