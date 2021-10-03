/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
 var fractionToDecimal = function (numerator, denominator) {
    let s = [];
    if (numerator / denominator < 0)
        s.push("-");
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    if (numerator >= denominator) {
        let t = Math.floor(numerator / denominator);
        s.push(t + '');
        numerator %= denominator;
    } else {
        s.push('0');
    }
    if (numerator === 0)
        return s.join('');
    s.push('.');
    let temp = numerator; // 被除数
    // 记录被除数的下标
    let map = new Map();
    let index = s.length;
    while (1) {
        if (!map.has(temp)) {
            map.set(temp, index);
            while (temp < denominator) {
                temp *= 10;
                if (temp < denominator) {
                    s.push('0');
                    ++index;
                }
            }
            let t = Math.floor(temp / denominator);
            s.push(t + '');
            ++index;
            let y = temp % denominator;
            if (y === 0)
                break;
            temp = y;
        } else {
            index = map.get(temp);
            break;
        }
    }
    if (index !== s.length) {
        s.splice(index, 0, "(");
        s.push(")");
    }
    return s.join('');
};