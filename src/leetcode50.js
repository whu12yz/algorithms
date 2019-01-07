/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let res = 1;
    let needReciprocal;
    if (n < 0) {
        needReciprocal = true;
    }
    n = Math.abs(n);
    res = fastPow(x, n);
    if (needReciprocal) {
        res = 1 / res;
    }
    return res;
};


function fastPow(x,n){
    if(n == 0){
        return 1;
    }
    else if(n % 2 == 1){
        return fastPow(x,n-1) * x;
    }
    else{
        var r = fastPow(x,n/2);
        return r * r;
    }
}

