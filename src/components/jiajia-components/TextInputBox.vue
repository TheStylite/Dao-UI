<template>
  <div class="input-box">
    <h3>Image</h3>
    <div class="input-inner">
      <input
        ref="inputValue"
        type="text"
        class="input"
        @input="change"
        v-model="inputValue"
        :placeholder="placeholder"
        :disabled="disabled"
      >
      <!-- <i
        v-show="inputValue"
        class="fontFamily status-close input-icon-close"
        @click="closeInput"
      ></i> -->
      <img
        src="../../assets/close.png"
        alt=""
        class="input-icon-close"
        v-show="inputValue"
        @click="closeInput"
      >
    </div>
    <p>The docker image name and version of Portworx Enterprise</p>
  </div>
</template>
<script>
export default {
  name: 'text-input-box',
  data() {
    return {
      inputValue: '',
    };
  },
  props: {
    value: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
  },
  computed: {},
  methods: {
    change() {
      this.$emit('input', this.inputValue);
    },
    closeInput() {
      this.inputValue = '';
      this.$emit('close');
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.input-box {
  margin: 0 auto;
  width: 400px;
  height: 150px;
  text-align: left;
  border: 1px solid #000;
  padding: 10px;
  h3 {
    margin: 0;
    padding: 5px 0;
  }
  .input-inner {
    display: inline-flex;
    position: relative;
    .input {
      flex: none;
      width: 240px;
      height: 30px;
      padding: 6px 10px;
      margin: 0;
      font-size: 13px;
      line-height: 16px;
      color: #333;
      vertical-align: middle;
      background-color: #fff;
      border: 1px solid #cbcfd8;
      border-radius: 3px;
      outline: none;
      box-shadow: none;
      transition: all 0.25s ease, background-image 0s;
    }
    input:disabled {
      color: #999;
      cursor: not-allowed;
      background-color: #f1f3f6;
      border: 1px solid #d5d9e2;
      border-radius: 3px;
    }
    .input:focus {
      border: 1px solid #1e9ce8;
      box-shadow: 0 0 5px #1e9ce880;
      border-radius: 3px;
    }
    input:disabled {
      color: #999;
      cursor: not-allowed;
      background-color: #f1f3f6;
      border: 1px solid #d5d9e2;
      border-radius: 3px;
    }
    .input-icon-close {
      position: absolute;
      top: 7px;
      right: 10px;
      z-index: 2;
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }
}
</style>