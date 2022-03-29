<template>
  <div class="box">
    <h3>Resource Requirements</h3>
    <h4>Limits</h4>
    <div class="panel">
      <!-- limit cpu -->
      <div class="item">
        <p class="title">CPU CORES</p>
        <div class="input">
          <input
            class="input-inner with-append"
            :class="{'error-input':emptyLimitCpu}"
            v-model="limitCpu"
            ref="limitCpu"
          />
          <div class="append append-left">{{plan.limits.cpu.unit}}</div>
        </div>
        <!-- <span
          class="error-tip"
          v-if="cpuExceed"
        >CPU 请求小于等于 CPU 限制</span> -->
        <span
          class="error-tip"
          v-if="emptyLimitCpu"
        >请输入cpu限制值</span>
      </div>
      <!-- limit memory -->
      <div class="item">
        <p class="title">MEMORY</p>
        <div class="input">
          <input
            class="input-inner with-append"
            :class="{'error-input':emptyLimitMem}"
            v-model="limitMem"
            ref="limitMem"
          />
          <div class="append append-left">{{plan.limits.memory.unit}}</div>
        </div>
        <!-- <span
          class="error-tip"
          v-if="memExceed"
        >内存请求小于等于内存限制</span> -->
        <span
          class="error-tip"
          v-if="emptyLimitMem"
        >请输入内存限制值</span>
      </div>
    </div>

    <h4>Requests</h4>
    <div class="panel">
      <!-- request cpu -->
      <div class="item">
        <p class="title">CPU CORES</p>
        <div class="input">
          <input
            class="input-inner with-append"
            :class="{'error-input':cpuExceed||emptyCpu}"
            v-model="cpu"
            ref="cpu"
          />
          <div class="append append-left">{{plan.requests.cpu.unit}}</div>
        </div>
        <span
          class="error-tip"
          v-if="cpuExceed"
        >CPU请求小于等于CPU限制</span>
        <span
          class="error-tip"
          v-if="emptyCpu"
        >请输入cpu请求值</span>
      </div>
      <!-- request mem -->
      <div class="item">
        <p class="title">MEMORY</p>
        <div class="input">
          <input
            class="input-inner with-append"
            :class="{'error-input':memExceed||emptyMem}"
            v-model="mem"
            ref="mem"
          />
          <div class="append append-left">{{plan.requests.memory.unit}}</div>
        </div>
        <span
          class="error-tip"
          v-if="memExceed"
        >内存请求小于等于内存限制</span>
        <span
          class="error-tip"
          v-if="emptyMem"
        >请输入内存请求值</span>
      </div>
    </div>
  </div>
</template>
<script>
import { set as setVal, cloneDeep } from 'lodash';

export default {
  data() {
    return {
      emptyLimitCpu: false,
      emptyLimitMem: false,
      emptyCpu: false,
      emptyMem: false,
    };
  },
  props: {
    plan: {
      type: Object,
      default() {
        return {
          limits: {
            cpu: { value: '1', unit: '核' },
            memory: { value: '1', unit: 'GiB' },
          },
          requests: {
            cpu: { value: '1', unit: '核' },
            memory: { value: '1', unit: 'GiB' },
          },
        };
      },
    },
  },
  watch: {},
  computed: {
    cpuExceed() {
      if (
        this.plan.requests.cpu.value &&
        this.plan.limits.cpu.value &&
        this.plan.requests.cpu.value > this.plan.limits.cpu.value
      ) {
        return true;
      } else {
        return false;
      }
    },
    memExceed() {
      if (
        this.plan.requests.memory.value &&
        this.plan.limits.memory.value &&
        this.plan.requests.memory.value > this.plan.limits.memory.value
      ) {
        return true;
      } else {
        return false;
      }
    },
    cpu: {
      get() {
        return this.plan.requests.cpu.value;
      },
      set(cpu) {
        // 数字为true，字符串为false
        if (!cpu) {
          this.emptyCpu = true;
        } else {
          this.emptyCpu = false;
        }
        if (cpu && !isNaN(parseFloat(cpu))) {
          cpu = parseFloat(cpu);
        }
        this.updatePlan('requests.cpu.value', cpu);
      },
    },
    limitCpu: {
      get() {
        return this.plan.limits.cpu.value;
      },
      set(cpu) {
        if (!cpu) {
          this.emptyLimitCpu = true;
        } else {
          this.emptyLimitCpu = false;
        }
        if (cpu && !isNaN(parseFloat(cpu))) {
          cpu = parseFloat(cpu);
        }
        this.updatePlan('limits.cpu.value', cpu);
      },
    },
    mem: {
      get() {
        return this.plan.requests.memory.value;
      },
      set(mem) {
        if (!mem) {
          this.emptyMem = true;
        } else {
          this.emptyMem = false;
        }
        if (mem && !isNaN(parseFloat(mem))) {
          mem = parseFloat(mem);
        }
        this.updatePlan('requests.memory.value', mem);
      },
    },
    limitMem: {
      get() {
        return this.plan.limits.memory.value;
      },
      set(mem) {
        if (!mem) {
          this.emptyLimitMem = true;
        } else {
          this.emptyLimitMem = false;
        }
        if (mem && !isNaN(parseFloat(mem))) {
          mem = parseFloat(mem);
        }
        this.updatePlan('limits.memory.value', mem);
      },
    },
  },
  methods: {
    updatePlan(path, value) {
      const plan = cloneDeep(this.plan);
      this.$emit('update:plan', setVal(plan, path, value));
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.box {
  width: 650px;
  height: 300px;
  border: 1px solid #000;
  text-align: left;
  padding: 5px;
  h4 {
    margin-top: 10px;
  }
  .panel {
    display: flex;
    justify-content: left;
    align-items: center;
    .item {
      margin-right: 10px;
      height: 75px;
      .title {
        font-size: 14px;
        margin: 5px 0;
      }
      .input {
        display: flex;
        justify-content: left;
        align-items: center;
        .input-inner {
          flex: none;
          width: 240px;
          height: 30px;
          padding: 6px 10px;
          margin: 0;
          font-size: 13px;
          line-height: 16px;
          color: #333;
          vertical-align: middle;
          background-color: #fff;
          border: 1px solid #cbcfd8;
          border-radius: 3px;
          outline: none;
          box-shadow: none;
          transition: all 0.25s ease, background-image 0s;
        }
        .with-append {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        .error-input {
          border: 1px solid #f1483f;
          background-color: #f9edec;
        }
        .append {
          height: 30px;
          padding: 5px 10px;
          font-size: 13px;
          font-weight: 400;
          line-height: 16px;
          color: #999;
          background-color: #f1f3f6;
          border: 1px solid #cbcfd8;
          border-color: #d5d9e2;
          border-radius: 3px;
        }
        .append-left {
          border-left: 0;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      }
      .error-tip {
        font-size: 10px;
        color: #f1483f;
      }
    }
  }
}
</style>