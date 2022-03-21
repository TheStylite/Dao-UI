<template>
  <div class="pod_count">
    <div v-if="editAble">
      <span style="margin-right:10px">{{count}}pods</span>
      <el-button
        type="text"
        @click="iconClick"
      ><i class="el-icon-edit"></i></el-button>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose"
      >
        <div><span>{{description}}</span></div>
        <button
          @click="subCount('edit')"
          :disabled="subAble"
        >-</button>
        <input
          type="text"
          v-model="editCount"
          class="pod_count_input"
          onkeyup="value = value.replace(/[^\d]/g, '')"
        >
        <button
          @click="addCount('edit')"
          :disabled="addAble"
        >+</button>

        <span
          slot="footer"
          class="dialog-footer"
        >
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button
            type="primary"
            @click="dialogVisible = false;count = editCount;"
          >确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <div v-else>
      <button
        @click="subCount"
        :disabled="subAble"
      >-</button>
      <input
        type="text"
        v-model="count"
        class="pod_count_input"
        onkeyup="value = value.replace(/[^\d]/g, '')"
      >
      <button
        @click="addCount"
        :disabled="addAble"
      >+</button>
      <div><span>{{description}}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OlmpodCount',
  props: {
    value: { type: Number, default: 0 },
    minCount: { type: Number, default: 0 },
    maxCount: { type: Number, default: 0 },
    editAble: { type: Boolean, default: false }, //当处于编辑时
    description: { type: String, default: '' },
  },
  data() {
    return {
      subAble: false, //减小按钮的disable
      addAble: false,
      dialogVisible: false, // 编辑时的弹窗
      editCount: 0,
    };
  },
  watch: {
    editCount: {
      handler(v) {
        if (v.length === 0) {
          this.editCount = 0;
        }
      },
    },
  },
  created() {
    if (this.minCount >= this.count) {
      this.subAble = true;
    }
    if (this.maxCount && this.maxCount <= this.count) {
      this.addAble = true;
    }
  },
  computed: {
    count: {
      get() {
        return this.value;
      },
      set(newVal) {
        if (typeof newVal === 'string') {
          newVal = newVal.replace(/[^\d]/g, '');
          newVal = newVal - 0;
        }
        this.$emit('input', newVal);
      },
    },
  },
  methods: {
    iconClick() {
      this.dialogVisible = true;
      this.editCount = this.count;
    },
    subCount(key) {
      if (key === 'edit') {
        if (this.editCount > 0) {
          this.editCount--;
          // this.count--之后，会触发set方法，向夫组件提交input事件，
          // 但是应该是数据还未更新到子组件，所以使用nextTick
          if (this.editCount === this.minCount) {
            this.subAble = true;
          }
          if (this.maxCount && this.editCount < this.maxCount) {
            this.addAble = false;
          }
        }
      } else {
        console.log(this.count, this.minCount);
        if (this.count > 0) {
          this.count--;
          // this.count--之后，会触发set方法，向夫组件提交input事件，
          // 但是应该是数据还未更新到子组件，所以使用nextTick
          this.$nextTick(() => {
            if (this.count === this.minCount) {
              this.subAble = true;
            }
            if (this.maxCount && this.count < this.maxCount) {
              this.addAble = false;
            }
            this.$emit('subCount', this.count); //点击增加按钮向上提交事件
          });
        }
      }
    },
    addCount(key) {
      if (key === 'edit') {
        this.editCount++;
        if (this.maxCount && this.count === this.maxCount) {
          this.addAble = true;
        }
      } else {
        this.count++;
        // this.count++之后，会触发set方法，向夫组件提交input事件，
        // 但是应该是数据还未更新到子组件，所以使用nextTick
        this.$nextTick(() => {
          if (this.maxCount && this.count === this.maxCount) {
            this.addAble = true;
          }
          this.$emit('addCount', this.count); //点击增加按钮向上提交事件
        });
      }
      this.subAble = false;
    },
    // editCount() {
    //   this.editAble = true;
    // },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(() => {
          done();

          console.log('确认');
        })
        .catch(() => {
          console.log('取消');
        });
    },
  },
};
</script>

<style lang="css">
.pod_count {
 
}
 .pod_count_input {
   width: 80px;
   margin:0px 10px;
  }
</style>

