<template>
    <div class="com-number">
        <div class="com-selector-tip">
            {{topTip}}
        </div>
        <div class="com-number-input">
            <input @input="numberValue" :placeholder="placeholder" @blur="numberKeyup"/>
        </div>
        <div class="com-selector-bottom">
            {{bottomTip}}
        </div>
    </div>
</template>

<script>
    import NumberReplace from "@/utils/NumberReplace";
    export default {
        name: "number",
        props: {
            value: {
                type: Number,
                default: 0,
            },
            placeholder: String,
            type: {
                type: String,
                default: 'number',
            }
        },
        data() {
            return {
                topTip: 'Number',
                bottomTip: 'This is a number input.'
            }
        },
        methods: {
            numberValue(e) {
                if (this.type === 'number') {
                    e.target.value = NumberReplace.numberReplace(e.target.value)
                } else if (this.type === 'float1') {
                    e.target.value = NumberReplace.float1Replace(e.target.value)
                } else if (this.type === 'float2') {
                    e.target.value = NumberReplace.float2Replace(e.target.value)
                }
            },
            numberKeyup(e) {
                e.target.value = NumberReplace.floatKeyup(e.target.value, this.type)
                this.$emit('input', Number(e.target.value));
            },
        }
    }
</script>

<style scoped>
.com-number-input {
    text-align: left;
}
</style>