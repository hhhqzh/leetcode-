/**
 * @param {character[]} chars
 * @return {number}
 */
 var compress = function(chars) {
    let count = 1;
    let res = "";
    let n = chars.length;
    for (let i = 1; i < n; ++i) {
        if (chars[i] == chars[i - 1])
            ++count;
        else {
            res += chars[i - 1];
            if (count != 1)
                res += count + "";
            count = 1;
        }
    }
    res += chars[n - 1];
    if (count != 1) 
        res += count + "";
    for(let i = 0; i < res.length; ++i) {
        chars[i] = res[i];
    }
    return res.length;
}; 

/**
 * @param {character[]} chars
 * @return {number}
 */
 var compress = function(chars) {
    const n = chars.length;
    let write = 0, left = 0;
    for (let read = 0; read < n; read++) {
        if (read === n - 1 || chars[read] !== chars[read + 1]) {
            chars[write++] = chars[read];
            let num = read - left + 1;
            if (num > 1) {
                let temp = ("" + num).split("");
                for (let i = 0; i < temp.length; ++i) {
                    chars[write++] = temp[i];
                }
            }
            left = read + 1;
        }
    }
    return write;
};