/**
 * @param {string} preorder
 * @return {boolean}
 */

// 用栈
 var isValidSerialization = function (preorder) {
    preorder = preorder.split(",");
    if (preorder.length == 1)
        return preorder[0] == "#";
    if (preorder.length < 3 || preorder[preorder.length - 1] !== "#")
        return false;
    let s = [];
    for (let i = 0; i < preorder.length; ++i) {
        if (s.length == 1 && s[0] == "#")
            return false;
        if (preorder[i] != "#")
            s.push(preorder[i]);
        else {
            while (s.length >= 2 && s[s.length - 1] == "#") {
                s.pop();
                s.pop();
            }
            s.push("#");
        }
    }
    return s.length == 1;
};

// 直接从后往前遍历
/**
 * @param {string} preorder
 * @return {boolean}
 */
 var isValidSerialization = function (preorder) {
    preorder = preorder.split(",");
    if (preorder.length == 1)
        return preorder[0] == "#";
    if (preorder.length < 3 || preorder[preorder.length - 1] !== "#")
        return false;
    let num = 0; // 记录#的个数
    for (let i = preorder.length - 1; i >= 0; --i) {
        if (preorder[i] == "#")
            ++num;
        else {
            if (num >= 2) {
                // num -= 2; num += 1; // 删除两个空节点，并且把当前节点变为空节点，其实就等于 num -= 1;
                --num;
            } else 
                return false;
         }
    }
    // 最后应该剩余1个空节点
    return num == 1;
};