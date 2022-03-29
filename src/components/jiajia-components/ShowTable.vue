<template>
  <div class="d-table">
    <h2>{{title}}</h2>
    <table
      class="table-style"
      v-if="this.thead.length"
    >
      <thead>
        <tr>
          <th
            v-for="(item) in thead"
            :key="item.key"
          >{{item.title}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="tbody.length===0">
          <p class="empty-tip">暂无数据</p>
        </tr>
        <tr
          v-else
          v-for="(item1) in tbody"
          :key="item1.key"
        >
          <td
            v-for="(item2) in thead"
            :key="item2.key"
          >
            <span><span v-if="item2.icon">{{item2.icon}}</span>{{item1[item2.key]}}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <p
      v-else
      style="font-size:14px"
    >暂无数据</p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    title: { type: String, default: '' },
    thead: {
      type: Array,
      default: () => {
        [];
      },
    },
    tbody: {
      type: Array,
      default: () => {
        [];
      },
    },
  },
  methods: {},
  computed: {},
};
</script>
<style lang="scss" scoped>
.d-table {
  margin: 0 auto;
  text-align: left;
  // border: 1px solid #999;
  h2 {
    margin: 10px;
  }
  .table-style {
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    td,
    th {
      min-width: 120px;
      max-width: 240px;
      padding: 8px 16px;
      border-bottom: 1px solid #e9e9e9;
      text-align: left;
    }
    tr {
      .empty-tip {
        font-size: 14px;
      }
    }
  }
}
</style>