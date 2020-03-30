<template>
  <div class="m-switch"
       :class="{'is-checked':value}"
       @click="handleClick">
    <span class='m-switch__core'
          ref="core">
      <span class="m-switch__button"></span>
    </span>
    <input type="checkbox"
           class="m-switch_input"
           :name="name"
           ref="input" />
  </div>
</template>

<script>

export default {
  name: 'm-switch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick () {
      this.$emit('input', !this.value)
      // 数据修改后， 等待DOM更新，再修改按钮的颜色
      this.$nextTick().then(() => {
        this.setColor()
        this.$refs.input.checked = this.value
      })
    },
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        // allow async-await
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  mounted () {
    this.setColor()
    this.$refs.input.checked = this.value
  }
}
</script>

<style lang="scss" scoped>
.m-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .m-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;

    .m-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  // 隐藏input标签
  .m-switch_input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
}
.is-checked {
  .m-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .m-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>
