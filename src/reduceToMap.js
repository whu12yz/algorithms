/**
 * 使用reduce实现map功能
 * @param {function} fn 
 */
Array.prototype.map = function(fn) {
  let temp = []
  temp.push(fn(this[0], 0, this))
  this.reduce((preValue, value, index, array) => {
    temp.push(fn(value, index, array))
    return value
  })
  return temp
}