/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
    let maxTime = releaseTimes[0];
    let res = keysPressed.charAt(0);
    for (let i = 1; i < releaseTimes.length; ++i) {
        let time = releaseTimes[i] - releaseTimes[i - 1];
        let c = keysPressed.charAt(i);
        if (time > maxTime) {
            res = c;
            maxTime = time;
        } else if (time === maxTime) {
            res = res > c ? res : c;
        }
    }
    return res;
};