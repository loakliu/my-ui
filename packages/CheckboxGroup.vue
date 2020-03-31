<template>
  <div class="m-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'mCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style>

</style>
