/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
    if (s.length !== goal.length)
        return false;
    let flag = [];
    for (let i = 0; i < s.length; ++i) {
        if (s.charAt(i) !== goal.charAt(i))
            flag.push(i);
    }
    if (flag.length === 0) {
        // 字符串相等的情况下，又必须交换，则只能交换相同的字符
        let set = new Set(s);
        return set.size < s.length;
    } else if (flag.length === 2) {
        return s[flag[0]] === goal[flag[1]] && s[flag[1]] === goal[flag[0]];
    } else {
        return false;
    }
};