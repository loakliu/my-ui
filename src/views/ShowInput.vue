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

    <div style="margin:20px"></div>
    <m-radio-group v-model='gender'>
      <m-radio label="1">男</m-radio>
      <m-radio label="0">女</m-radio>
    </m-radio-group>

    <div style="margin:50px"></div>
    <m-checkbox v-model="checked">备选项</m-checkbox>

    <div style="margin:20px"></div>
    <m-checkbox-group v-model='checkList'>
      <m-checkbox label="1">1</m-checkbox>
      <m-checkbox label="11">2</m-checkbox>
      <m-checkbox label="123">3</m-checkbox>
    </m-checkbox-group>

  </div>
</template>

<script>

export default {
  data () {
    return {
      inputValue: '',
      switchValue: false,
      switchValue2: false,
      gender: 1,
      checked: false,
      checkList: []
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
  margin: 100px 20px;
  overflow: auto;
}
</style>
