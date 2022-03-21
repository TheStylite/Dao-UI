<template>
  <div>
    <div><span>{{description}}</span></div>

    <div
      class="reason_for_olm"
      v-if="context.length"
    >
      {{context}}
    </div>
  </div>

</template>

<script>
export default {
  name: 'OlmReason',
  data() {
    return {};
  },
  props: {
    description: { type: String, default: '' },
    context: { type: String, default: '' },
  },
};
</script>

<style lang="css">
.reason_for_olm {
  display:inline-block;
height: 25px;
text-align: center;
line-height: 25px;
border: 1px solid #cccccc;
padding:10px 20px;
cursor: pointer;
background-color: #f1eeee;
}
</style>

