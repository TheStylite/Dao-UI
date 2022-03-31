<template>
    <div class="update-strategy">
        <div class="update-strategy-radios">
            <div>
                <div class="radio-item">
                    <input type="radio" name="radio" id="radio1" value="RollingUpdate" v-model="selectRadio" />
                    <div class="radio-flex">
                        <div class="radio-tip">
                            <label>RollingUpdate(default)</label>
                            <span class="radio-tip-span">Execute a smooth roll out of the new revision,based on the settings below</span>
                        </div>
                        <div :class="selectRadio === 'RollingUpdate' ? 'radio-input-info' : 'radio-input-info radio-input-display'">
                            <div class="radio-input">
                                <div class="radio-input-title">Max Unavailable</div>
                                <div class="radio-input-tip">
                                    <input-unit :input-unit="'of 1 pod'" :inputVal.sync="unavailableValue"></input-unit>
                                    <span class="radio-tip-span">{{inputTip}}</span>
                                </div>
                            </div>
                            <div class="radio-input">
                                <div class="radio-input-title">Max Surge</div>
                                <div class="radio-input-tip">
                                    <input-unit :input-unit="'greater than 1 pod'" :inputVal.sync="surgeValue"></input-unit>
                                    <span class="radio-tip-span">{{inputTip}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="radio-item">
                <input type="radio" name="radio" id="radio2" value="Recreate" v-model="selectRadio" @change="changeRadio" />
                <div class="radio-tip">
                    <label>Recreate</label>
                    <span class="radio-tip-span">Shut down all existing pods before creating new ones</span>
                </div>
            </div>
            <div>
                选中的是{{selectRadio}}, {{unavailableValue}}, {{surgeValue}}
            </div>
        </div>
        <div class="com-selector-bottom">
            {{bottomTip}}
        </div>
    </div>
</template>

<script>
    import InputUnit from './input-unit'
    export default {
        name: "UpdateStrategy",
        components: {
            InputUnit
        },
        data() {
            return {
                selectRadio: 'RollingUpdate',
                radioTips: 'Number or percentage of total pods at the start of the update(optional)',
                bottomTip: 'The update strategy of the deployment',
                inputTip: 'Number or percentage of total pods at the start of the update(optional)',
                unavailableValue: '',
                surgeValue: '',
            }
        },
        watch: {
            selectRadio: {
                immediate: true,
                handler() {
                    this.$emit('input', this.selectRadio);
                },
            },
        },
        methods: {
            changeRadio() {
                if (this.selectRadio == 'Recreate') {
                    this.unavailableValue = '';
                    this.surgeValue = '';
                }
            },
        },
    }
</script>

<style scoped lang="scss">
    .update-strategy {
        width: 50%;
    }
    .radio-item, .radio-tip {
        text-align: left;
        display: flex;
    }
    .radio-flex {
        display: flex;
        flex-direction: column;
        .radio-input-info {
            margin-top: 15px;
            display: block;
            .radio-input {
                display: flex;
                margin-bottom: 15px;
            }
            .radio-input-title {
                width: 20%;
            }
            .radio-input-tip {
                display: flex;
                flex-direction: column;
            }
        }
        .radio-input-display {
            display: none;
        }
    }
    .radio-tip {
        flex-direction: column;
    }
    .radio-tip-span {
        color: #a8a8a8;
        font-size: 14px;
        margin-top: 5px;
    }

</style>