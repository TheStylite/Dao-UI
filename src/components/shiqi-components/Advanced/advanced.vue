<template>
    <div class="com-advanced">
        <div class="advanced-title" @click="changeAdvanced">
            <i class="el-icon-arrow-down" v-if="!isShowAdvanced"></i>
            <i v-else class="el-icon-arrow-up"></i>
            <span>{{advancedTitle}}</span>
        </div>
        <div :class="isShowAdvanced ? '' : 'advanced-slot'">
            <slot name="advanced-slot"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "advanced",
        data() {
            return {
                advancedTitle: 'Advanced Configuration',
                isShowAdvanced: false,
            }
        },
        methods: {
            changeAdvanced() {
                this.isShowAdvanced = !this.isShowAdvanced;
            },
        }
    }
</script>

<style scoped lang="scss">
    .com-advanced {
        text-align: left;
    }
.advanced-title {
    font-weight: bold;
    color: #222;
    span {
        margin-left: 10px;
    }
}
    .advanced-slot {
        display: none;
    }
</style>