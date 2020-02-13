/**
 * @description 克隆一个对象，去除它跟原对象的关联性
 * @param (Object) obj 原对象
*/
export const cloneObj = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * @description 将日期对象格式化为指定格式
 * @param (String, Object) String 格式 obj 日期对象
*/
export const dateFormat = (fmt, date) => {
	let ret
	let opt = {
		"Y+": date.getFullYear().toString(),        // 年
		"m+": (date.getMonth() + 1).toString(),     // 月
		"d+": date.getDate().toString(),            // 日
		"H+": date.getHours().toString(),           // 时
		"M+": date.getMinutes().toString(),         // 分
		"S+": date.getSeconds().toString()          // 秒
	}
	for (let k in opt) {
		ret = new RegExp("(" + k + ")").exec(fmt)
		if (ret) {
			fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
		}
	}
	return fmt
}

/**
 * @description 将数值格式化为千分制,并保留两位小数
 * @param (Number||String) 数值或字符串
*/
export const numberFormat = (number) => {
    return (Number(number).toFixed(2) + "").replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, "$&,")
}

/**
 * @description 将数字格式化为两位浮点数
 * @param (Number||String) 数值或字符串
*/
export const floatFormat = (number) => {
	if (/^\./.test(number)) {
		number = '0' + number
	}
	if (/.+\./.test(number)) {
		let strArr = number.split('.')
		if (strArr[1].length == 0) {
			number = number + '00'
		} else if (strArr[1].length == 1) {
			number = number + '0'
		} else {
			number = String(number.match(/^\d+(?:\.\d{0,2})?/))
		}
	} else {
		number = number + '.00'
	}
	return number
}