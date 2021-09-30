/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
 var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    let ans = (ax2 - ax1) * (ay2 - ay1) + (bx2 - bx1) * (by2 - by1);
    if (ax2 <= bx1 || bx2 <= ax1 || ay1 >= by2 || by1 >= ay2)
        return ans;
    let [x, y] = [0, 0];
    if (ay2 >= by2 && ay1 >= by1 || by2 >= ay2 && by1 >= ay1) {
        y = Math.min(by2 - ay1, ay2 - by1);
    } else if (ay2 >= by2 && ay1 <= by1 || by2 >= ay2 && by1 <= ay1) {
        y = Math.min(by2 - by1, ay2 - ay1);
    }

    if (bx2 >= ax2 && bx1 >= ax1 || ax2 >= bx2 && ax1 >= bx1) {
        x = Math.min(ax2 - bx1, bx2 - ax1);
    } else if (ax2 >= bx2 && ax1 <= bx1 || bx2 >= ax2 && bx1 <= ax1) {
        x = Math.min(bx2 - bx1, ax2 - ax1);
    }
    return ans - x * y;
};