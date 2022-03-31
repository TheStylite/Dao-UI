<template>
  <div class="drop-select">
    <h3>{{title}}</h3>
    <div
      class="selector"
      :class="{focus:showOption}"
      @click="selectValue"
      tabindex="1"
    >
      <input
        type="text"
        v-model="optionValue"
        readonly="readonly"
        placeholder="请选择"
      >
      <img
        src="../../assets/arrow.png"
        alt=""
      >
    </div>
    <div
      class="list"
      v-show="showOption"
    >
      <ul>
        <li
          v-for="item in options"
          :key="item.value"
          @click="getValue(index,item)"
        >{{item.label}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showOption: false,
      optionValue: '',
    };
  },
  props: {
    options: { type: Array, default: () => [] },
    value: { type: String, default: '' },
    title: { type: String, default: '' },
  },
  methods: {
    selectValue() {
      this.showOption = !this.showOption;
    },
    getValue(index, item) {
      this.optionValue = item.label;
      this.showOption = false;
      this.$emit('changeOption', item.label);
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.drop-select {
  // width: 200px;
  text-align: left;
  h3{
    font-size: 16px;
    margin:5 0;
  }
  .selector {
    width: 140px;
    height: 35px;
    line-height: 35px;
    border: 1px solid #cccccc;
    border-radius: 3px;
    position: relative;
    input {
      box-sizing: border-box;
      border: none;
      outline: none;
      padding-left: 10px;
      padding-right:15px;
      width: 90%;
    }
    img {
      width: 16px;
      height: 16px;
      position: absolute;
      right: 10px;
      top: 30%;
    }
  }
  .focus {
    border: 1px solid #1e9ce8;
    box-shadow: 0 0 5px #1e9ce880;
  }
  .list {
    width: 145px;
    background-color: white;
    box-shadow: 0 0 5px #ccc;
    ul {
      li {
        box-sizing: border-box;
        list-style: none;
        width: 100%;
        height: 30px;
        cursor: pointer;
        line-height: 30px;
        padding-left: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      li:hover {
        background-color: #cccccc;
      }
    }
  }
}
</style>