<template>
    <div class="dao-ui-input-unit">
        <div class="input-unit-div">
            <input class="input-unit-input" id='input-unit-input' @input="inputValue" :value="inputVal" @blur="blurValue" />
            <span>{{inputUnit}}</span>
        </div>

    </div>
</template>

<script>
    import NumberReplace from "@/utils/NumberReplace";
    export default {
        name: "input-unit",
        props: {
            inputUnit: String,
            inputVal: String,
        },
        data() {
            return {
            }
        },
        watch: {
            inputVal: {
                deep: true,
                handler(val) {
                    this.inputVal = val;
                },
            }
        },
        methods: {
            inputValue(e) {
                this.inputVal = NumberReplace.float2ReplaceUnit(e.target.value);
            },
            blurValue() {
                this.$emit('update:inputVal', this.inputVal);
            },
        }
    }
</script>

<style scoped lang="scss">
    $border-eee: 1px solid #eee;
    .input-unit-div {
        border-top: $border-eee;
        border-right: $border-eee;
        border-left: $border-eee;
        border-bottom: 1px solid #222;
        border-radius: 3px;
        width: 300px;
        height: 32px;
        line-height: 32px;
        color: #222;
        font-size: 16px;
        display: flex;
        input {
            border: 0;
            flex: 1;
            width: auto;
            padding: 0 5px;
            outline: none;
        }
        span {
            color: #a8a8a8;
            padding: 0 5px;
            border-left: 1px solid #eee;
            font-size: 14px;
            display: inline-block;
        }
    }
</style>