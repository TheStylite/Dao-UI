<template>
    <div class="com-selector">
        <div class="com-selector-tip">
            {{topTip}}
        </div>
        <div class="com-selector-select-input" @click="openValue">
            <p>{{selectedValue}}</p>
        </div>
        <div class="com-selector-select" v-if="openFlag">
            <ul>
                <SelectInput class="com-selector-input" v-model="inputValue" @input="selectValue" @getListData="getListData"/>
                <li class="com-selector-select-li"
                    v-for="(item, index) in selectList"
                    :key="index"
                    @click="pickValue(item.name, index)"
                >{{item.name}}</li>
            </ul>
        </div>
        <div class="com-selector-bottom">
            {{bottomTip}}
        </div>
    </div>
</template>

<script>
    import SelectInput from "./selectInput";
    export default {
        name: "Selector",
        components: {
            SelectInput
        },
        data() {
            return {
                selectedValue: '',
                openFlag: false,
                selectList: [],
                inputValue: '',
                topTip: 'Selector',
                bottomTip: 'This is a selector.'
            }
        },
        methods: {
            selectValue() {
                this.$emit('input', this.inputValue);
            },
            getListData(data) {
                this.selectList = data;
            },
            openValue() {
                this.openFlag = true;
                if (this.selectedValue) {
                    // 隐藏问题：如果传给后端的值为''的时候，后端是把所有的值都返回还是报错
                    // 如果全都返回就可以之间调用接口获取数据
                    console.log('kl')
                }
            },
            pickValue(name, index) {
                this.selectedValue = name;
                this.openFlag = false;
                this.selectList = [];
            },
        }
    }
</script>

<style scoped>
    .com-selector-select-input p {
        padding: 3px 8px;
        border: 1px solid #aaaaaa;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box;
        height: 24px;
        font-size: 14px;
        margin: 0;
        text-align: left;
    }
    .com-selector {
        width: 200px;
    }
    ul li{
        list-style: none;
    }
    ul {
        box-shadow: 0px 1px 2px #a8a8a8;
        border-top: 0;
        border-radius: 0 0 4px 4px;
        padding: 3px 0;
        background-color: #fff;
        font-size: 14px;
        color: #606266;
        text-align: left;
        margin: 0;
    }
    .com-selector-input {
        margin: 3px 8px;
    }
    li {
        padding: 3px 8px;
    }
    li:hover {
        background-color: #f5f7fa;
    }
</style>
<style>
    .com-selector-tip, .com-selector-bottom {
        text-align: left;
        margin: 3px 0;
        font-size: 14px;
    }
    .com-selector-tip {
        font-weight: bold;
        color: #222;
    }
    .com-selector-bottom {
        color: #a8a8a8;
    }
</style>