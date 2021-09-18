/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function (x, n) {
    if (n < 0) {
        x = 1 / x;
        n *= -1;
    }

    let res = 1;
    while (n > 0) {
        if ((n & 1) == 1)
            res *= x;
        x *= x;
        n >>>= 1;
    }

    return res;
};

var myPow = function(x, n) {
    if(n === 0) return 1;
    if(n === 1) return x;
    if(n === -1) return 1/x;
    if(n%2===0){
        let a = myPow(x,n/2);
        return a * a
    }
    else{
        let b = myPow(x,(n-1)/2);
        return b*b*x
    }
};