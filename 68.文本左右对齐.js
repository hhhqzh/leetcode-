/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
 var fullJustify = function (words, maxWidth) {
    let len = 0;
    for (const word of words) {
        len += word.length;
    }
    let n = Math.ceil(len / maxWidth);
    let res = [];
    let left = 0, right = 0;
    let tLen = 0;
    let str = "";
    while (right < words.length) {
        tLen += words[right].length;
        if (tLen <= maxWidth && maxWidth - tLen > right - left - 1) {
            ++right;
            continue;
        }
        tLen -= words[right].length;
        let spaceBase = 0, spaceRest = 0;
        if (right - left - 1 > 0) {
            spaceBase = Math.floor((maxWidth - tLen) / (right - left - 1));
            spaceRest = (maxWidth - tLen) % (right - left - 1);
            for (let i = left; i < right - 1; ++i) {
                str += words[i];
                let s = "";
                for (let j = 0; j < spaceBase; ++j)
                    s += " ";
                if (i - left < spaceRest)
                    s += " ";
                str += s;
            }
            str += words[right - 1];
        } else {
            spaceBase = maxWidth - tLen;
            str += words[left];
            let s = "";
            for (let j = 0; j < spaceBase; ++j)
                s += " ";
            str += s;
        }
        res.push(str);
        str = "";
        tLen = 0;
        left = right;
    }
    str = "";
    for (let i = left; i < words.length; ++i) {
        str += words[i];
        if (str.length < maxWidth)
            str += " ";
    }
    for (let i = str.length; i < maxWidth; ++i)
        str += " ";
    res.push(str);
    return res;
};