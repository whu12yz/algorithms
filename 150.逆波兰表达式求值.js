/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */
/**
 * @param {string[]} tokens
 * @return {number}
 */
function isOperator(str) {
    return '+-*/'.indexOf(str) > -1;
}

function calculate(operator, left, right) {
    switch(operator) {
        case '+': return left + right;
        case '-': return left - right;
        case '*': return left * right;
        case '/': return parseInt((left / right), 10);
        default: return null;
    }
}

var evalRPN = function(tokens) {
    const stack = [];
    for( let i = 0; i < tokens.length; i++) {
        
        if (isOperator(tokens[i])) {
            const right = stack.pop();
            const left = stack.pop();
            stack.push(calculate(tokens[i], parseInt(left, 10), parseInt(right, 10)));
        } else {
            stack.push(tokens[i]);
        }
    }
    return stack[0];
};

