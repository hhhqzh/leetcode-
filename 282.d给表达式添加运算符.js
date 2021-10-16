/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
 var addOperators = function (num, target) {
    let res = [];
    if (num.length === 0)
        return res;

    const dfs = (num, target, start, curRes, previous, curExp) => {
        if (start === num.length && curRes === target) {
            res.push(curExp);
            return;
        }
        for (let i = start; i < num.length; ++i) {
            let curNum = num.slice(start, i + 1); // 当前的数字
            if (curNum.length > 1 && curNum.charAt(0) === '0')
                break;
            if (curExp.length > 0) {
                dfs(num, target, i + 1, curRes + parseInt(curNum), parseInt(curNum), curExp + "+" + curNum);
                dfs(num, target, i + 1, curRes - parseInt(curNum), -parseInt(curNum), curExp + "-" + curNum);
                // 乘法要注意保留前一个数
                dfs(num, target, i + 1, (curRes - previous) + previous * parseInt(curNum), previous * parseInt(curNum), curExp + '*' + curNum);
            } else {
                dfs(num, target, i + 1, parseInt(curNum), parseInt(curNum), curNum);
            }
        }
    }
    
    dfs(num, target, 0, 0, 0, "");
    return res;
};