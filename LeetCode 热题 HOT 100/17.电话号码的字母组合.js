/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits === "")
        return [];
    let nums = ["", "", 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    let res = [];

    const dfs = (digits, idx, s) => {
        if (idx === digits.length) {
            res.push(s);
            return;
        }
        let num = Number.parseInt(digits.charAt(idx));
        let arr = nums[num];
        for (let i = 0; i < arr.length; ++i) {
            dfs(digits, idx + 1, s + arr.charAt(i));
        }
    }

    dfs(digits, 0, "");
    return res;
};