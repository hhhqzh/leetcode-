/**
 * @param {string} s
 * @return {boolean}
 */
 var isNumber = function (s) {
    s = s.trim();
    for (let i = 0; i < s.length; ++i) {
        let c = s.charAt(i)
        if (!((c >= '0' && c <= '9') || (c === 'e' || c === 'E' || c === '.' || c === '+' || c === '-')))
            return false;
    }

    const isDecimal = (s) => {
        if (s === "")
            return false;
        let i = 0;
        if (s.charAt(i) === '+' || s.charAt(i) === '-') {
            ++i;
        }
        s = s.slice(i);
        i = 0;
        if (s === "." || s.indexOf('.') === -1)
            return false;
        let count = 0;
        for (; i < s.length; ++i) {
            if (s.charAt(i) === '.')
                ++count;
            else if (s.charAt(i) < '0' || s.charAt(i) > '9')
                return false;
            if (count > 1)
                return false;
        }
        return true;
    }

    const isInteger = (s) => {
        if (s === "")
            return false;
        let i = 0;
        if (s.charAt(i) === '+' || s.charAt(i) === '-') {
            ++i;
        }
        s = s.slice(i);
        if (s === "")
            return false;
        for (let i = 0; i < s.length; ++i) {
            if (s.charAt(i) < '0' || s.charAt(i) > '9')
                return false;
        }
        return true;
    }

    let index = s.indexOf('e') !== -1 ? s.indexOf("e") : s.indexOf("E");
    if (index !== -1) {
        return (isDecimal(s.slice(0, index)) || isInteger(s.slice(0, index))) && isInteger(s.slice(index + 1));
    } else {
        return isDecimal(s) || isInteger(s);
    }
};