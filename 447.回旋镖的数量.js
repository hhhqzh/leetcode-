/**
 * @param {number[][]} points
 * @return {number}
 */
 var numberOfBoomerangs = function(points) {
    let n = points.length;
    let res = 0;
    for (let i = 0; i < n; ++i) {
        let map = new Map();
        for (let j = 0; j < n; ++j) {
            if (i != j) {
                let dis = Math.pow(points[i][0] - points[j][0], 2) + Math.pow(points[i][1] - points[j][1], 2);
                if (map.has(dis)) {
                    res += 2 * map.get(dis);
                    map.set(dis, map.get(dis) + 1);
                } else {
                    map.set(dis, 1);
                }
            }
        }
    }
    return res;
};