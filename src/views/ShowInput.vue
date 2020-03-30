<template>
  <div class="mm-input">
    <h3>文本框</h3>
    <m-input palceholder="请输入内容"
             v-model="inputValue"></m-input>
    <div style="margin-top：50px"></div>
    <h3>switch 开关</h3>
    <m-switch name='aa'
              v-model='switchValue'></m-switch>
    <m-switch name='bb'
              v-model='switchValue2'
              active-color='orange'
              inactive-color="red"></m-switch>
    <div style="margin-top: 50px"></div>
    <m-radio label="1"
             v-model='gender'>男</m-radio>
    <m-radio label="0"
             v-model='gender'>女</m-radio>
    <div style="margin-top：50px"></div>
    <m-radio-group v-model='gender'>
      <m-radio label="1">男</m-radio>
      <m-radio label="0">女</m-radio>
    </m-radio-group>
  </div>
</template>

<script>

export default {
  data () {
    return {
      inputValue: '',
      switchValue: false,
      switchValue2: false,
      gender: 1
    }
  },
  methods: {
    testBlur (e) {
      alert('blur', e.target.value)
    },
    testInput (e) {
      alert('input', e.target.value)
    }
  }
}
</script>

<style scoped>
.mm-input {
  width: 200px;
  margin-top: 30px;
}
</style>
