/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    let need = new Map(), window = new Map();
    for (const tt of t) {
        if (need.has(tt))
            need.set(tt, need.get(tt) + 1);
        else
            need.set(tt, 1);
    }

    let left = 0, right = 0, start = 0, len = Number.MAX_SAFE_INTEGER;
    let valid = 0;
    while (right < s.length) {
        let c = s[right];
        ++right;
        if (need.has(c)) {
            if (window.has(c))
                window.set(c, window.get(c) + 1);
            else
                window.set(c, 1);
            if (window.get(c) === need.get(c))
                ++valid;
        }
        while (valid == need.size) {
            if (right - left < len) {
                len = right - left;
                start = left;
            }
            let ch = s[left];
            if (need.has(ch)) {
                window.set(ch, window.get(ch) - 1);
                if (window.get(ch) < need.get(ch))
                    --valid;
            }
            ++left;
        }
    }
    return len == Number.MAX_SAFE_INTEGER? "": s.substr(start, len);
};