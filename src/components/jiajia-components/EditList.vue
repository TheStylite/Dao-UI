<template>
  <div class="edit-list">
    <div class="edit-table">
      <div class="edit-thead">
        <div class="header">KEY</div>
        <div class="header">VALUE</div>
        <div class="headerOp"></div>
      </div>
      <div
        class="edit-tbody"
        v-for="(item,index) in shuju"
        :key="index"
      >
        <div class="content"><input v-model="item.key"></div>
        <div class="content"><input v-model="item.value"></div>
        <div
          class="del"
          @click="del(index)"
        ><img
            src="../../assets/del.png"
            alt=""
          ></div>
      </div>
    </div>
    <div
      class="edit-tip"
      v-if="!showTip"
    >请填写数据</div>
    <div
      class="edit-add"
      @click="add"
    >
      <img
        src="../../assets/add.png"
        alt=""
      >
      <span>Add More</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shuju: [],
      noData: false,
    };
  },
  props: {
    listData: { type: Array, default: () => [] },
  },
  created() {
    this.shuju = this.listData;
  },
  computed: {
    showTip() {
      return this.shuju[this.shuju.length - 1].key;
    },
  },
  methods: {
    del(index) {
      this.shuju.splice(index, 1);
    },
    add() {
      if (this.showTip) {
        this.shuju.push({
          key: '',
          value: '',
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.edit-list {
  // width:420px;
  text-align: left;
  .edit-table {
    width: 350px;
    .edit-thead {
      display: flex;
      justify-content: space-between;
      .header {
        flex: 3;
        margin-right: 120px;
        color: rgb(142, 141, 141);
      }
      .headerOp {
        flex: 1;
      }
    }
    .edit-tbody {
      display: flex;
      justify-content: space-between;
      .content {
        flex: 3;
        input {
          border: 1px solid #ccc;
          border-bottom: 1px solid rgb(161, 160, 160);
          margin: 5px 10px 0 0;
          height: 25px;
          width: 160px;
          box-sizing: border-box;
          padding-left: 5px;
        }
        input:focus {
          outline: none;
          border: 1px solid #1e9ce8;
          box-shadow: 0 0 5px #1e9ce880;
        }
      }
      .del {
        flex: 1;
        img {
          width: 16px;
          height: 16px;
          padding-top: 10px;
        }
      }
    }
  }
  .edit-tip {
    font-size: 12px;
    color: red;
  }
  .edit-add {
    display: flex;
    align-items: center;
    padding: 5px 0 0 5px;
    margin-top: 8px;
    img {
      width: 16px;
      height: 16px;
      margin-right: 2px;
    }
    span {
      color: #5685ca;
      font-size: 12px;
    }
  }
}
</style>