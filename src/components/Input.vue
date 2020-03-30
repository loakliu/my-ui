<template>
  <div class="m-input"
       :class="{'m-input_suffix':showSuffix}">
    <input class="m-input_inner"
           :class="{'is-disabled': disabled}"
           :placeholder="placeholder"
           :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
           :name="name"
           :value="value"
           @input="handleInput"
           @blur="handleBlur"
           :disabled=disabled>
    <span class="m-input_suffix">
      <i class="on-input_icon m-icon-cancel"
         v-if="clearable && value"
         @click="clear"></i>
      <i class="on-input_icon m-icon-visible"
         v-if="showPassword && type=='password'"
         @click="handlePassword"></i>
    </span>
  </div>
</template>
<script>
export default {
  name: 'm-input',
  components: {
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  watch: {},
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  },
  data () {
    return {
      // 显示是否显示密码框
      passwordVisible: false
    }
  },
  methods: {
    handleInput (e) {
      console.log(e)
      this.$emit('input', e.target.value)
    },
    handleBlur (e) {
      this.$emit('blur', e)
    },
    clear () {
      this.$emit('input', '')
    },
    handlePassword () {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>
<style lang="scss" scoped>
.m-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .m-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.m-input_suffix {
  .m-input_inner {
    padding-right: 30px;
  }
  .m-input_suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
</style>
