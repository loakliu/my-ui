<template>
  <div class="m-form-item">
    <label class="m-form-item__label" :style="{width: this.Form.labelWidth}">{{label}}</label>
    <div class="m-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-form-item',
  props: {
    label: String
  },
  inject: ['Form']
}
</script>

<style lang="scss">
.m-form-item {
  margin-bottom: 25px;
  .m-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .m-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
