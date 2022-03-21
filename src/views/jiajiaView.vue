<template>
  <div>
    <text-input-box
      v-model="onlydata"
      placeholder="请输入内容"
      :disabled="false"
      @close="close"
    ></text-input-box>
    <p>{{onlydata}}</p>
  </div>
</template>
<script>
import TextInputBox from '../components/jiajia-components/text-input-box.vue';
export default {
  data() {
    return {
      onlydata:''
    };
  },
  components: {
    TextInputBox,
  },
  methods: {
    close(){
      this.onlydata = ''
    }
  },
};
</script>
<style></style>