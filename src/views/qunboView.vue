<template>
  <div style="text-align:left">
    <OlmPodCount
      @addCount="addCount"
      @subCount="subCount"
      v-model="count"
      :editAble="true"
      :description="description"
      :maxCount='15'
    ></OlmPodCount>
    <div style="margin:50px 0px">
      <OlmPassword
        :description="description"
        v-model="password"
      ></OlmPassword>
    </div>
    <div style="margin:0px 0px 50px">
      <OlmReason
        :context="context"
        :description="description"
      ></OlmReason>
    </div>

    <div style="text-align:left">
      <OlmLink
        :description="description"
        :link="link"
        :displayName="displayName"
      >
      </OlmLink>
    </div>

  </div>
</template>

<script>
import OlmPodCount from '../components/qunbo-components/podCount/OlmPodCount.vue';
import OlmPassword from '../components/qunbo-components/password/OlmPassword.vue';
import OlmReason from '../components/qunbo-components/Reason/OlmReason.vue';
import OlmLink from '../components/qunbo-components/link/OlmLink.vue';

export default {
  name: 'App',
  components: {
    OlmPodCount,
    OlmPassword,
    OlmReason,
    OlmLink,
  },
  data() {
    return {
      count: 10,
      minCount: 8,
      maxCount: 12,
      description: '描述信息',
      context: 'context',
      link: 'www.baidu.com',
      displayName: 'displayName',
      password: '123456',
    };
  },
  methods: {
    addCount(count) {
      console.log(count, '###');
    },
    subCount(count) {
      console.log(count, '###');
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
