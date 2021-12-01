/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    for (let c of s) {
        if (c === '(' || c === '[' || c === '{') {
            stack.push(c);
            continue;
        }
        if (stack.length === 0 || c === ')' && stack[stack.length - 1] !== '(' || c === ']' && stack[stack.length - 1] !== '[' || c === '}' && stack[stack.length - 1] !== '{') {
            return false;
        } else {
            stack.pop();
        }
    }
    return stack.length === 0;
};