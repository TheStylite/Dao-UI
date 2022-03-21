<template>
  <div class="policy">
    <h3>Pull Policy</h3>
    <div
      v-for="(item,index) in radioData"
      :key="index"
    >
      <input
        type="radio"
        name="a"
        v-model="selectValue"
        :value="typeof item == 'string' ? item : item.value"
        :id="typeof item == 'string' ? item : item.label"
        :disabled="typeof item == 'string' ? false : item.disabled == true ? true :false"
      />
      <label
        :for="typeof item =='string'?item:item.label">{{typeof item =='string'?item : item.label}}</label>
    </div>
    <p>image pull policy for container image</p>
  </div>
</template>
<script>
export default {
  name: 'radioPolicy',
  data() {
    return {
      selectValue: '',
    };
  },
  created() {
    this.selectValue = this.radioData[0].value || this.radioData[0];
  },
  props: {
    radioData: { type: Array, default: () => [] },
  },
  watch: {
    selectValue: {
      immediate: true,
      handler() {
        this.$emit('input', this.selectValue);
      },
    },
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.policy {
  width: 300px;
  height: 150px;
  border: 1px solid #000;
  text-align: left;
  padding: 5px;
  margin: 10px auto;
}
.item {
  margin: 5px 0;
}
input {
  margin-left: 5px;
}
label {
  margin-left: 5px;
}
</style>