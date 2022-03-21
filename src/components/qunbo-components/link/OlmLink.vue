<template>
  <div>
    <el-popover
      placement="top-start"
      title=""
      width="100"
      trigger="hover"
      :content="description"
    >
      <b slot="reference">{{displayName}}</b>
    </el-popover><br>
    <el-link
      type="primary"
      @click="linkClick"
    >{{link}}</el-link>
  </div>

</template>

<script>
export default {
  name: 'OlmLink',
  data() {
    return {};
  },
  props: {
    description: { type: String, default: '' },
    link: { type: String, default: '' },
    displayName: { type: String, default: '' },
  },
  methods: {
    linkClick() {
      console.log('link点击了');
    },
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

