/**
 * @param {string} s
 * @return {boolean}
 */
// 栈
 var checkValidString = function(s) {
    let stack = [];
    let star = [];
    for (let i = 0; i < s.length; ++i) {
        if (s[i] === "(")
            stack.push(i);
        else if (s[i] === "*")
            star.push(i)
        else if (s[i] === ")") {
            if (stack.length)
                stack.pop();
            else {
                if (star.length)
                    star.pop();
                else
                    return false;
            }
        }
    }
    while (stack.length && star.length) {
        if (stack[stack.length - 1] > star[star.length - 1])
            return false;
        stack.pop();
        star.pop();
    }
    return stack.length === 0;
};

// dp

var checkValidString = function(s) {
    let n = s.length;
    let dp = new Array(n).fill(0).map(() => {return new Array(n).fill(false)});
    for (let i = 0; i < n; ++i) {
        if (s[i] === "*")
            dp[i][i] = true;
    }
    for (let i = 1; i < n; ++i) {
        dp[i - 1][i] = (s[i - 1] === "(" || s[i - 1] === "*") && (s[i] === ")" || s[i] === "*");
    }
    for (let i = n - 3; i >=0; --i) {
        for (let j = i + 2; j < n; ++j) {
            if ((s[i] === "(" || s[i] === "*") && (s[j] === ")" || s[j] === "*"))
                dp[i][j] = dp[i + 1][j - 1];
            for (let k = i; k < j && !dp[i][j]; ++k)
                dp[i][j] = dp[i][k] & dp[k + 1][j];
        }
    }
    return dp[0][n - 1];
}