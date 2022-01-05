// 排序 用哈希表
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = new Map();
    for (let str of strs) {
        let s = str.split("");
        s = s.sort().join("");
        if (!map.has(s)) {
            map.set(s, new Array());
        }
        let arr = map.get(s);
        arr.push(str);
        map.set(s, arr);
    }
    return Array.from(map.values());
};

// 用数组计数
var groupAnagrams = function (strs) {
    let map = new Map();
    for (let str of strs) {
        let count = new Array(26).fill(0);
        for (let s of str) {
            ++count[s.charCodeAt() - 97];
        }
        count = count.join(".");
        let arr = map.has(count) ? map.get(count) : new Array();
        arr.push(str);
        map.set(count, arr);
    }
    return Array.from(map.values());
};