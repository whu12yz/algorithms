/*
 * @lc app=leetcode.cn id=307 lang=javascript
 *
 * [307] 区域和检索 - 数组可修改
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    
};

/** 
 * @param {number} i 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
    
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    
};

var extend = function(subClass, superClass) {
    var F = function() {};
    F.prototype = superClass.prototype;

    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
}

function test() {}
test.constr = function() {
    var o = {};
    o.__proto__ = test.prototype;
    test.call(o, arguments);
    return o;
}

function toUpperCase(value) {
    value.replace(/[A-Z]/g, (match) => {
        return '-' + match.toLowerCase();
    })
}
function toLowerCase(value) {
    return value.replace(/-([a-z])/g, (match, p1) => {
        return p1.toUpperCase();
    })
}

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */
// @lc code=end

