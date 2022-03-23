<template>
  <div class="title">
    无尘开发的组件
    <BooleanSwitch v-model="flag"></BooleanSwitch>
  </div>
</template>
<script>
import BooleanSwitch from '@/components/wuchen-components/booleanSwitch.vue';

export default {
  components: {
    BooleanSwitch,
  },
  data() {
    return {
      flag: false,
    };
  },
};
</script>