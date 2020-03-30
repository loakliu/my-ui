<template>
  <div id="app">
    <show-button></show-button>
    <show-dialog></show-dialog>
    <show-input></show-input>
  </div>
</template>

<script>
import ShowButton from './views/ShowButton'
import ShowDialog from './views/ShowDialog'
import ShowInput from './views/ShowInput'
export default {
  name: 'App',
  components: {
    ShowButton,
    ShowDialog,
    ShowInput
  }
}
</script>

<style lang="scss">
</style>
