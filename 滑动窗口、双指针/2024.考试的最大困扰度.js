/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
/**
 * 可变滑动窗口
 * 等于找最长的子串，其中T或F的个数<=k
 */
var maxConsecutiveAnswers = function (answerKey, k) {
    return Math.max(getCount(answerKey, k, 'T'), getCount(answerKey, k, 'F'))
};

var getCount = function(answerKey, k, ch) {
    let len = 0,
        count = 0;
    let l = 0,
        r = 0;
    // 计算包括<=k个 ch 的最长子串
    while (r < answerKey.length) {
        if (answerKey.charAt(r) === ch) {
            ++count;
            while (count > k && l <= r) {
                if (answerKey.charAt(l) === ch) {
                    --count;
                }
                ++l;
            }
        }
        len = Math.max(len, r - l + 1);
        ++r;
    }
    return len;
}