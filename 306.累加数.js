/**
 * @param {string} num
 * @return {boolean}
 */
// 非递归，枚举前两个数，计算这两个数组成的完整字符串，与 num 判断是否相等
var isAdditiveNumber = function (num) {
    const check = (a, b) => {
        if (a.charAt(0) === '0' && a.length > 1 || b.charAt(0) === '0' && b.length > 1) {
            return false;
        }
        let temp = a + b;
        [a, b] = [b, (parseInt(a) + parseInt(b)) + ""];
        temp += b;
        while (temp.length < num.length) {
            [a, b] = [b, (parseInt(a) + parseInt(b)) + ""];
            temp += b;
        }
        return temp === num;
    }

    for (let j = 1; j < num.length; ++j) {
        for (let i = 0; i < j; ++i) {
            if (check(num.slice(0, i + 1), num.slice(i + 1, j + 1))) {
                return true;
            }
        }
    }
    return false;
};

// dfs
var isAdditiveNumber = function (num) {
    let temp = new Array();

    const dfs = (num, temp) => {
        let len = temp.length;
        if (len >= 3 && temp[len - 1] !== temp[len - 2] + temp[len - 3]) {
            return false;
        }
        if (num.length === 0 && len >= 3) {
            return true;
        }
        for (let i = 0; i < num.length; ++i) {
            let cur = num.slice(0, i + 1);
            if (cur.charAt(0) === '0' && cur.length !== 1) {
                continue;
            }
            temp.push(parseInt(cur));
            if (dfs(num.slice(i + 1), temp)) {
                return true;
            }
            temp.pop();
        }
        return false;
    }

    return dfs(num, temp);
};