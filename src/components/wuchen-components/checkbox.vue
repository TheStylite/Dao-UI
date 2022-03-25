<template>
  <div class="dao-ui-checkbox">
    <div class="common-title">
      {{title}}
    </div>
    <div class="checkbox commonMargin">
      <input
        type="checkbox"
        id="dao-ui-checkbox"
        class="input_checkbox"
        v-model="formChecked"
      >
      <label
        class="common-descriptor"
        for="dao-ui-checkbox"
      >{{title}}</label>

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
    value: { type: Boolean, default: true },
    title: { type: String, default: 'ImageRegistry' },
    descriptor: {
      type: String,
      default: 'A flag used to indicate the specified registry is insecure',
    },
  },
  data() {
    return {
      // checked: false,
    };
  },
  computed: {
    formChecked: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit('input', v);
      },
    },
  },
  methods: {},
};
</script>
<style lang="scss">
.dao-ui-checkbox {
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
  .input_checkbox {
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: bottom;
    margin-right: 7px;
  }
  label {
    cursor: pointer;
    user-select: none;
  }

  // .checkbox {
  //   display: none;
  // }
  // input:checked + label {
  //   background-color: blue;
  // }
}
</style>