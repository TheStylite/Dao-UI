<template>
    <div>
        <input class="select-input" v-model="selectInputValue" @input="getListData" placeholder="请输入" />
    </div>
</template>

<script>
    export default {
        name: "selectInput",
        data() {
            return {
                listData: [],
                selectInputValue: ''
            }
        },
        methods: {
            getListData() {
                this.listData = [{
                    name: 'dsp',
                    id: 0
                }, {
                    name: 'dsp123',
                    id: 1
                }, {
                    name: 'deg',
                    id: 2
                }];
                this.$emit('getListData', this.listData)
            },
        }
    }
</script>

<style scoped>
.select-input {
    border: 1px solid #aaaaaa !important;
    padding: 5px 9px;
    border-radius: 4px;
}
</style>