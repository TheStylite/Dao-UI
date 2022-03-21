<template>
  <div>
    <text-input-box
      v-model="onlydata"
      placeholder="请输入内容"
      :disabled="false"
      @close="close"
    ></text-input-box>
    <p>{{onlydata}}</p>
    <radio-policy :radioData="radioData" v-model="radioValue"></radio-policy>
    <p>选择的值是{{radioValue}}</p>
  </div>
</template>
<script>
import TextInputBox from '../components/jiajia-components/text-input-box.vue';
import RadioPolicy from '../components/jiajia-components/radio-policy.vue'
export default {
  data() {
    return {
      onlydata:'',
      radioValue:'',
      radioData:[
        {
          label:'Always',
          value:'Always',
        },
        {
          label:'Never',
          value:'Never',
        },
        {
          label:'IfNotPresent',
          value:'IfNotPresent',
        }
      ],
    };
  },
  components: {
    TextInputBox,
    RadioPolicy,
  },
  methods: {
    close(){
      this.onlydata = ''
    }
  },
};
</script>
<style></style>