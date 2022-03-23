<template>
  <div class="title">
    无尘开发的组件
    <BooleanSwitch v-model="flag"></BooleanSwitch>
    <br />
    <CheckBox v-model="flag"></CheckBox>
  </div>
</template>
<script>
import BooleanSwitch from '@/components/wuchen-components/booleanSwitch.vue';
import CheckBox from '@/components/wuchen-components/checkbox.vue';

export default {
  components: {
    CheckBox,
    BooleanSwitch,
  },
  data() {
    return {
      flag: false,
    };
  },
};
</script>