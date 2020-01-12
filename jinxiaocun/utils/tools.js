/**
 * @description 克隆一个对象，去除它跟原对象的关联性
 * @param (Object) obj 原对象
*/
export const cloneObj = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}