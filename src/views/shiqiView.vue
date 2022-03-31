<template>
  <div>
    时柒开发的组件
    <Advanced>
      <div slot="advanced-slot">
        <Number v-model="numberValue" :type="'float2'"></Number>
        <Selector v-model="selectValue"></Selector>
        <TextTip :textTip="textTip"></TextTip>
      </div>
    </Advanced>
    <update-strategy></update-strategy>
  </div>
</template>
<script>
  import Number from '@/components/shiqi-components/Number/number'
  import Selector from "@/components/shiqi-components/Selector/Selector";
  import TextTip from "@/components/shiqi-components/TextTip/TextTip";
  import Advanced from '@/components/shiqi-components/Advanced/advanced'
  import UpdateStrategy from "../components/shiqi-components/UpdateStrategy/UpdateStrategy";
  export default {
    name: 'HelloWorld',
    components: {
      Selector,
      Number,
      TextTip,
      Advanced,
      UpdateStrategy
    },
    watch:{
      numberValue(){
        console.log(this.numberValue);
      },
      selectValue() {
        console.log(this.selectValue)
      },
    },
    data() {
      return {
        numberValue: 0,
        selectValue: '',
        textTip: 'this is ....'
      }
    },
  }
</script>