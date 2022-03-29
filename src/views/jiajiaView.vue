<template>
  <div>
    <text-input-box
      v-model="onlydata"
      placeholder="请输入内容"
      :disabled="false"
      @close="close"
    ></text-input-box>
    <p>{{onlydata}}</p>
    <radio-policy
      :radioData="radioData"
      v-model="radioValue"
    ></radio-policy>
    <p>选择的值是{{radioValue}}</p>
    <memory-capacity-input-box :plan.sync="plan"></memory-capacity-input-box>
    <show-table
      title="conditions"
      :thead="theadData"
      :tbody="tbodyData"
    ></show-table>
    <text-display
      :tip="tip"
      :text="text"
      style="margin-top:60px"
    >
      <template slot="display-style">
        <span style="font-size:12px;margin:0;color:blue">example</span>
      </template>
    </text-display>
    <edit-list :listData.sync="editListData"></edit-list>
  </div>
</template>
<script>
import TextInputBox from '../components/jiajia-components/TextInputBox.vue';
import RadioPolicy from '../components/jiajia-components/RadioPolicy';
import MemoryCapacityInputBox from '../components/jiajia-components/MemoryCapacityInputBox.vue';
import ShowTable from '@/components/jiajia-components/ShowTable';
import TextDisplay from '@/components/jiajia-components/TextDisplay.vue';
import EditList from '@/components/jiajia-components/EditList.vue';
export default {
  data() {
    return {
      onlydata: '',
      radioValue: '',
      radioData: [
        {
          label: 'Always',
          value: 'Always',
        },
        {
          label: 'Never',
          value: 'Never',
        },
        {
          label: 'IfNotPresent',
          value: 'IfNotPresent',
        },
      ],
      plan: {
        limits: {
          cpu: { value: '1', unit: '核' },
          memory: { value: '1', unit: 'GiB' },
        },
        requests: {
          cpu: { value: '1', unit: '核' },
          memory: { value: '1', unit: 'GiB' },
        },
      },
      theadData: [
        { title: 'Type', key: 'Type1' },
        { title: 'Status', key: 'Status1' },
        // { title: 'Updated', key: 'Updated1',icon:'①', },
        { title: 'Updated', key: 'Updated1' },
        { title: 'Reason', key: 'Reason1' },
        { title: 'Message', key: 'Message1' },
      ],
      tbodyData: [
        {
          Type1: 'Deployed',
          Status1: 'True',
          Updated1: 'Feb21,4:26pm',
          Reason1: '-',
          Message1: '-',
          key: '1',
        },
        {
          Type1: 'Failed',
          Status1: 'True',
          Updated1: 'Feb21,6:12am',
          Reason1: 'TriggerBuildFailed',
          Message1: 'Error resolving ImageStreamTag konito-quarks-ubi8-error in namespace',
          key: '2',
        },
        {
          Type1: '333',
          Status1: 'True',
          Updated1: 'Feb21',
          Reason1: '-',
          Message1: '-',
          key: '3',
        },
      ],
      tip: 'he service at which the running etcd cluster can be accessed',
      text: 'Service',
      editListData: [
        {
          key: 'aaa',
          value: 'vvv',
        },
        {
          key: 'bbb',
          value: 'ssss',
        },
      ],
    };
  },
  components: {
    TextInputBox,
    RadioPolicy,
    MemoryCapacityInputBox,
    ShowTable,
    TextDisplay,
    EditList,
  },
  methods: {
    close() {
      this.onlydata = '';
    },
  },
};
</script>
<style></style>