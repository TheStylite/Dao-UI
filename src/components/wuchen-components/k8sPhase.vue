<template>
  <div class="dao-ui-k8sPhase">
    <div class="common-title">
      {{title}}
    </div>

    <div class="common-descriptor">
      {{descriptor}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'daoui-checkbox',
  props: {
    title: { type: String, default: 'Phase' },
    descriptor: {
      type: String,
      default: 'Installation Succeeded',
    },
  },
};
</script>
<style lang="scss">
.dao-ui-k8sPhase {
  max-width: 500px;
  text-align: left;
  .commonMargin {
    margin: 4px 0;
  }
  .common-title {
    font-weight: bold;
  }
  .common-descriptor {
    font-size: 15px;
  }
}
</style>