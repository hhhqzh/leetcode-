/**
 * @param {string} s
 * @return {string}
 */
// 递归实现
var decodeString = function (s) {
    let str = "";
    let l = 0,
        r = 0;
    while (r < s.length) {
        let ch = s.charAt(r);
        if (!isDigital(ch) && ch !== '[' && ch !== ']') {
            str += ch;
        } else if (isDigital(ch)) {
            let num = ch;
            while (r + 1 < s.length && isDigital(s.charAt(r + 1))) {
                ++r;
                num += s.charAt(r);
            }
            ++r;
            l = r;
            let temp = 1;
            while (r + 1 < s.length && temp !== 0) {
                ++r;
                if (s.charAt(r) === '[')
                    ++temp;
                if (s.charAt(r) === ']')
                    --temp;
            }
            let t = decodeString(s.slice(l + 1, r));
            num = Number.parseInt(num);
            while (num--) {
                str += t;
            }
        }
        ++r;
    }
    return str;
};

// 栈实现
var decodeString = function (s) {
    let str = "";
    let stack = new Array();
    let num = 0;
    for (let c of s) {
        if (isDigital(c)) {
            num = num * 10 + Number.parseInt(c);
        } else if (c === '[') {
            stack.push(str);
            stack.push(num);
            str = "";
            num = 0;
        } else if (c === ']') {
            let n = stack.pop();
            let t = str;
            while (--n) {
                str += t;
            }
            let str1 = stack.pop();
            str = str1 + str;
        } else {
            str += c;
        }
    }
    return str;
};

var isDigital = function (c) {
    return c >= '0' && c <= '9';
}

var isDigital = function (c) {
    return c >= '0' && c <= '9';
}