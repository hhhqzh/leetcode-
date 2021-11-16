/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
/*
    精确覆盖意味着矩形的边和顶点会重合在一起，同一个位置至多只能存在四个顶点
    除了要满足矩形区域的面积等于所有矩形的面积之和，还要满足矩形区域四角的顶点只能出现一次，且其余顶点的出现次数只能是两次或四次。
*/
var isRectangleCover = function (rectangles) {
    // 保存四个
    let left = Number.MAX_SAFE_INTEGER;
    let right = Number.MIN_SAFE_INTEGER;
    let top = Number.MIN_SAFE_INTEGER;
    let bottom = Number.MAX_SAFE_INTEGER;

    let set = new Set();
    let sumArea = 0;
    for (let rectangle of rectangles) {
        left = Math.min(left, rectangle[0]);
        bottom = Math.min(bottom, rectangle[1]);
        right = Math.max(right, rectangle[2]);
        top = Math.max(top, rectangle[3]);

        // 累加矩形的面积
        sumArea += (rectangle[2] - rectangle[0]) * (rectangle[3] - rectangle[1]);
        // 记录每个小矩形的四个坐标
        let lt = rectangle[0] + " " + rectangle[3];
        let lb = rectangle[0] + " " + rectangle[1];
        let rt = rectangle[2] + " " + rectangle[3];
        let rb = rectangle[2] + " " + rectangle[1];

        // 若坐标在集合 set 中则移除，否则加入，最后只剩出现奇数次的坐标点
        if (set.has(lt))
            set.delete(lt);
        else
            set.add(lt);
        if (set.has(lb))
            set.delete(lb);
        else
            set.add(lb);
        if (set.has(rt))
            set.delete(rt);
        else
            set.add(rt);
        if (set.has(rb))
            set.delete(rb);
        else
            set.add(rb);
    }
    // 判断最后集合 set 是否只存在四个坐标，分别是最左上、最左下、最右上、最右下，并且所有小矩形的面积和等于这四个坐标点组成的矩形的面积
    if (set.size === 4 && set.has(left + " " + top) && set.has(left + " " + bottom) && set.has(right + " " + top) && set.has(right + " " + bottom))
        return (right - left) * (top - bottom) === sumArea;
    return false;
};