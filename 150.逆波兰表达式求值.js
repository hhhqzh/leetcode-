/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    for (let token of tokens) {
        switch (token) {
            case '+': {
                let a = stack.pop(),
                    b = stack.pop();
                stack.push(a + b);
                break;
            }
            case '-': {
                let a = stack.pop(),
                    b = stack.pop();
                stack.push(b - a);
                break;
            }
            case '*': {
                let a = stack.pop(),
                    b = stack.pop();
                stack.push(a * b);
                break;
            }
            case '/': {
                let a = stack.pop(),
                    b = stack.pop();
                stack.push(b / a > 0 ? Math.floor(b / a) : Math.ceil(b / a));
                break;
            }
            default: {
                stack.push(Number(token));
            }
        }
    }
    return stack[0];
};