/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let result = 0;
    let i = 1;
    while(num2.length) {
        let tmp = parseInt(num2.substring(num2.length - 1)) * i;
        i *= 10;
        num2 = num2.substring(0, num2.length - 1);
        while(tmp) {
            result += parseInt(num1);
            tmp--;
        }
    }
    return result.toString();
};

console.log(multiply('4', '5'));