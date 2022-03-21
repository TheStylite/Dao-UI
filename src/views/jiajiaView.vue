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
    <memory-capacity-input-box :plan.sync="plan"></memory-capacity-input-box>
  </div>
</template>
<script>
import TextInputBox from '../components/jiajia-components/TextInputBox.vue';
import RadioPolicy from '../components/jiajia-components/RadioPolicy'
import MemoryCapacityInputBox from '../components/jiajia-components/MemoryCapacityInputBox.vue'
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
      plan:{
        limits: {
            cpu: { value: '1', unit: '核' },
            memory: { value: '1', unit: 'GiB' },
          },
          requests: {
            cpu: { value: '1', unit: '核' },
            memory: { value: '1', unit: 'GiB' },
          },
      }
    };
  },
  components: {
    TextInputBox,
    RadioPolicy,
    MemoryCapacityInputBox,
  },
  methods: {
    close(){
      this.onlydata = ''
    }
  },
};
</script>
<style></style>