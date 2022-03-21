  <!--  借助于vue-clipboard2，实现将input的内容复制到剪切板中 -->

<template>
  <div>
    <div class="password_for_olm">
      <el-input
        v-model="password"
        :title="password"
        class="input_for_olm"
        show-password
      ></el-input>

      <el-button
        v-clipboard:copy="password"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
      >复制</el-button>

    </div>
    <span>{{description}}</span>

  </div>

</template>

<script>
export default {
  name: 'OlmPassword',
  props: {
    description: { type: String, default: '' },
    value: { type: String, default: 'password' },
  },
  data() {
    return {};
  },
  computed: {
    password: {
      get() {
        return this.value;
      },
      set(newVal) {
        this.$emit('input', newVal);
      },
    },
  },
  methods: {
    onCopy(e) {
      this.$message({
        message: '复制成功！',
        type: 'success',
      });
      console.log(e);
    },
    onError(e) {
      this.$message({
        message: '复制失败！',
        type: 'error',
      });
      console.log(e);
    },
  },
};
</script>

<style lang="sass">
.password_for_olm

  width: 500px
  display: flex
  .el-input__inner
    border-top-right-radius: 0px
    border-bottom-right-radius: 0px

  .el-button
    border-top-left-radius: 0px
    border-bottom-left-radius: 0px
    border-left: 0px
</style>

