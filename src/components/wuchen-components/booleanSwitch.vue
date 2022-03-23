<template>
  <div class="dao-ui-boolSwtich">
    <div class="switch-title">
      {{title}}
    </div>
    <div class="switchBox">
      <input
        type=checkbox
        id="dao-ui-boolSwitch"
        class="boolSwitch"
        v-model="formChecked"
      />
      <label
        for="boolSwitch"
        @click="clickCheck"
      >

      </label>

    </div>

    <div class="switch-descriptor">
      {{descriptor}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'daoui-swtcih',
  props: {
    value: { type: Boolean, default: true },
    title: { type: String, default: 'TLS Mode' },
    descriptor: { type: String, default: 'TLS routes' },
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
  methods: {
    clickCheck() {
      this.formChecked = !this.formChecked;
    },
  },
};
</script>
<style lang="scss">
.dao-ui-boolSwtich {
  max-width: 200px;
  text-align: left;
  .switch-title {
    font-weight: bold;
  }
  .switch-descriptor {
    font-size: 15px;
  }

  .boolSwitch {
    display: none;
  }
  .switchBox {
    margin: 4px 0;
  }
  .boolSwitch + label {
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    height: 22px;
    max-width: 44px;
    line-height: 20px;
    vertical-align: middle;
    border-radius: 100px;
    border: 1px solid transparent;
    background-color: rgba(0, 0, 0, 0.25);
    cursor: pointer;
    -webkit-transition: all 0.36s;
    transition: all 0.36s;
    position: relative;
  }
  .boolSwitch:checked + label {
    background-color: #1890ff;
  }
  .boolSwitch + label::before {
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    position: absolute;
    left: 1px;
    top: 1px;
    border-radius: 18px;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.36s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    -webkit-transition: all 0.36s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
  }
  .boolSwitch:checked + label::before {
    left: 23px;
    transition: all 0.36s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    -webkit-transition: all 0.36s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }
  // .boolSwitch + label::after {
  //   content: '关';
  //   position: absolute;
  //   top: 1px;
  //   left: 24px;
  //   font-size: 12px;
  //   color: #fff;
  // }
  // .boolSwitch:checked + label::after {
  //   content: '开';
  //   left: 5px;
  // }
}
</style>