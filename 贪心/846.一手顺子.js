/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
    let n = hand.length;
    if (n % groupSize !== 0) {
        return false;
    }
    hand.sort((a, b) => {
        return a - b;
    });
    while (hand.length) {
        let cnt = 1;
        let num = hand[0];
        hand.splice(0, 1);
        let i = 0;
        while (i < hand.length && cnt < groupSize) {
            if (num + 1 === hand[i]) {
                ++cnt;
                num = hand[i];
                hand.splice(i, 1);
            } else {
                ++i;
            }
        }
        if (cnt < groupSize)
            return false;
    }
    return true;
};