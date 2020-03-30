<template>
  <div>
    <h3>弹框部分</h3>
    <m-button @click="visible = true">弹框</m-button>
    <m-dialog width="50%"
              :visible.sync='visible'>
      <template v-slot:title>
        <h3>我是提示</h3>
      </template>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <m-button @click="visible= false">取消</m-button>
        <m-button type="primary" @click='visible = false'>确定</m-button>
      </template>
    </m-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      visible: false
    }
  }
}
</script>

<style scoped>
</style>
