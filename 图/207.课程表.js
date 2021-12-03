/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// bfs 拓扑
var canFinish = function (numCourses, prerequisites) {
    // 保存每个课程的必学课程数（图的入度）
    let map = new Map();
    let set = new Set();
    for (let prerequisite of prerequisites) {
        set.add(prerequisite[0]);
        set.add(prerequisite[1]);
        map.set(prerequisite[1], map.has(prerequisite[1]) ? map.get(prerequisite[1]) + 1 : 1);
        if (!map.has(prerequisite[0]))
            map.set(prerequisite[0], 0);
    }
    // 保存入度为 0 的课程
    let arr = new Array();
    // 保存入度为 0 的课程数
    let count = 0
    for (let m of map) {
        if (m[1] === 0) {
            arr.push(m[0]);
            ++count;
        }
    }
    while (arr.length > 0 && numCourses > 0) {
        let course = arr[0];
        for (let prerequisite of prerequisites) {
            if (prerequisite[0] === course) {
                let cnt = map.get(prerequisite[1]);
                map.set(prerequisite[1], cnt - 1);
                // 把入度为 0 的课程加入数组 arr
                if (cnt - 1 === 0) {
                    arr.push(prerequisite[1]);
                    ++count;
                }
            }
        }
        arr.shift();
    }
    // 若存在拓扑排序，返回 true
    return count === set.size;
};