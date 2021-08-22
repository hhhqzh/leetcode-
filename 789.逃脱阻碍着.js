/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */

 // 曼哈顿距离
 var escapeGhosts = function(ghosts, target) {

    const getDis = (now, target) => {
        let a = Math.abs(now[0] - target[0]);
        let b = Math.abs(now[1] - target[1]);
        return a + b;
    }

    let people = getDis([0, 0], target);
    for (let i = 0; i < ghosts.length; ++i) {
        if (people >= getDis(ghosts[i], target))
            return false;
    }
    return true;
};