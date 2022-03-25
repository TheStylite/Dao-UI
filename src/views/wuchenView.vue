<template>
  <div class="title">
    无尘开发的组件
    <BooleanSwitch v-model="flag"></BooleanSwitch>
    <br />
    <CheckBox v-model="flag"></CheckBox>
    <br />
    <K8sPhase></K8sPhase>
  </div>
</template>
<script>
import BooleanSwitch from '@/components/wuchen-components/booleanSwitch.vue';
import CheckBox from '@/components/wuchen-components/checkbox.vue';
import K8sPhase from '@/components/wuchen-components/k8sPhase.vue';

export default {
  components: {
    CheckBox,
    BooleanSwitch,
    K8sPhase,
  },
  data() {
    return {
      flag: false,
    };
  },
};
</script>