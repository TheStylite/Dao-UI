function numberReplace(value) {
    return value = value.replace(/[^\d]/g, '');
}

function floatReplace(value) {
    let str = value
    let len1 = str.substr(0, 1)
    let len2 = str.substr(1, 1)
    let lenLast = str.substr(str.length-1)
    //如果第一位是0，第二位不是点，就用数字把点替换掉
    if (str.length > 1 && len1 == 0 && len2 != ".") {
        str = str.substr(1, 1)
    }
    //第一位不能是.
    if (len1 == ".") {
        str = ""
    }
    //限制只能输入一个小数点
    if (str.indexOf(".") != -1) {
        let str_ = str.substr(str.indexOf(".") + 1)
        if (str_.indexOf(".") != -1) {
            str = str.substr(0, str.indexOf(".") + str_.indexOf(".") + 1)
        }
    }
    //正则替换
   return str = str.replace(/[^\d^\.]+/g, '') // 保留数字和小数点
}

function float1Replace(value) {
    let str = floatReplace(value)
    return str = str.replace(/^\D*([0-9]\d*\.?\d{0,1})?.*$/,'$1') // 小数点后只能输 1 位
}

function float2Replace(value) {
    let str = floatReplace(value)
    return str = str.replace(/^\D*([0-9]\d*\.?\d{0,2})?.*$/,'$1') // 小数点后只能输 2 位
}

function float2ReplaceUnit(value) {
    let str = floatReplace(value)
    console.log(str.replace(/^\d+(\.[0-9]{1, 2})?%?$/,''))
    return str = str.replace(/^\D*([0-9]\d*\.?\d{0,2})?%?$/,'$1') // 小数点后只能输 2 位,可以输入%
}

function floatKeyup(value, type) {
    let val = value;
    if (val.substr(val.length - 1) == '.' && type == 'float1') {
        val = val + '0'
    } else if (val.substr(val.length - 1) == '.' && type == 'float2') {
        val = val + '00'
    }
    return val;
}
export default {
    numberReplace,
    float1Replace,
    float2Replace,
    float2ReplaceUnit,
    floatKeyup
}
