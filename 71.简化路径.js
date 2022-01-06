/**
 * @param {string} path
 * @return {string}
 */
// 傻逼做法
var simplifyPath = function (path) {
    let stack = [path.charAt(0)];
    for (let i = 1; i < path.length; ++i) {
        if (path.charAt(i) === '/') {
            if (stack[stack.length - 1] === '/')
                continue;
            else
                stack.push('/');
        } else if (path.charAt(i) === '.') {
            let start = i;
            while (i < path.length && path.charAt(i) !== '/')
                ++i;
            let s = path.slice(start, i);
            // 文件/目录名称
            if (s.length > 1) {
                // 切换上一级目录
                if (s === ".." && stack.length > 1) {
                    stack.pop();
                    stack.pop();
                } else if (s !== "..") {
                    stack.push(s);
                }
            }
            --i;
        } else {
            let start = i;
            while (i < path.length && path.charAt(i) !== '/')
                ++i;
            stack.push(path.slice(start, i));
            --i;
        }
    }
    if (stack.length > 1 && stack[stack.length - 1] === '/') {
        stack.pop();
    }
    return stack.join("");
};

// 大神做法
var simplifyPath = function (path) {
    let stack = [];
    for (let i of path.split('/')) {
        if (!['', '.', '..'].includes(i)) {
            stack.push(i);
        } else if (i === ".." && stack.length > 0) {
            stack.pop();
        }
    }
    return "/" + stack.join('/');
};