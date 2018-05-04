function checkType() {}
let types = ['String', 'Number', 'Boolean', 'Null', 'Undefined', 'Function', 'Object', 'Array']

for(let i = 0, t; t = types[i++];) {
  checkType.prototype[`is${t}`] = function(value) {
    return Object.prototype.toString.call(value) === `[object ${t}]`
  }
}

export default new checkType()