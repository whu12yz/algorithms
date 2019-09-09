/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */
/**
 * @param {string} s
 * @return {number}
 */
function isMultiplyDivide(value) {
    return '/*'.indexOf(value) > -1;
}

function isPlusAddSub(value) {
    return '+-'.indexOf(value) > -1;
}

function cal(operator, left, right) {
    left = parseInt(left, 10);
    right = parseInt(right, 10);
    switch(operator) {
        case '+': return left + right;
        case '-': return left - right;
        case '*': return left * right;
        case '/': return parseInt((left / right), 10);
        default: return null;
    }
}

function filter(s) {
    let news = '';
    let i = 0;
    while (i < s.length) {
        if (s[i] !== " ") {
            news += s[i];
        }
        i++;
    }
    return news;
}

var calculate = function(s) {
    s = filter(s);
    const stack1 = [];
    for (let i = 0; i < s.length; i ++) {
        if (isMultiplyDivide(s[i])) {
            let left = stack1.pop()
            stack1.push(cal(s[i], left, s[i+1]));
            i ++;
        } else {
            if (isMultiplyDivide(s[i - 1]) || isPlusAddSub(s[i - 1])) {
                stack1.push(s[i]);
            } else {
                stack1[stack1.length - 1] += s[i - 1];
            }
        }
    }
    const stack2 = [];
    console.log(stack1);
    for (let j = 0; j < stack1.length; j ++) {
        if (isPlusAddSub(stack1[j])) {
            let left = stack2.pop();
            stack2.push(cal(stack1[j], left, stack1[j + 1]))
            j ++;
        } else {
            stack2.push(stack1[j]);
        }
    }
    return stack2.length > 0 ? stack2.join('') : stack2[0];
};

