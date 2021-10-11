/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
 var validateStackSequences = function (pushed, popped) {
    let stack = [];
    let [i, j] = [0, 0];
    while (i < pushed.length) {
        if (pushed[i] === popped[j]) {
            ++j;
            ++i;
            continue;
        } else if (stack.length > 0 && stack[stack.length - 1] === popped[j]) {
            ++j;
            stack.pop();
        } else {
            stack.push(pushed[i]);
            ++i;
        }
    }
    while (stack.length > 0 && j < popped.length) {
        if (stack[stack.length - 1] === popped[j]) {
            stack.pop();
            ++j;
        } else {
            return false;
        }
    }
    return true;
};