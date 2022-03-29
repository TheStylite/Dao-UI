<template>
  <div class="text-display">
    <div class="display-main">
      <!-- 文本框的大小和位置不确定，暂时用element -->
      <!-- <el-tooltip
        class="item"
        effect="dark"
        :content="tip"
        placement="top"
      >
        <span>{{text}}</span>
      </el-tooltip> -->
    </div>
    <slot name="display-style"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  props: {
    tip: { type: String, default: '' },
    text: { type: String, default: '' },
  },
  methods: {
    showTip() {
      this.show = true;
    },
    hiddenTip() {
      this.show = false;
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.text-display{
  width:200px;
  margin:20px;
  display:inline-block;
  // border:1px solid #000;
}
</style>