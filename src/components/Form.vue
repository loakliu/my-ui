<template>
  <div class="m-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'm-form',
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide () {
    return {
      Form: this
    }
  }
}
</script>

<style>

</style>
