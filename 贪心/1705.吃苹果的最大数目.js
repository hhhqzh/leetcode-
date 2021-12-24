// 贪心  可以加上优先队列
var eatenApples = function (apples, days) {
    let endArray = new Array(); // 保存第 i 天长出的苹果的持续天数
    days.forEach((day, index) => {
        endArray.push([index, day + index]);
    })
    // 根据过期天数从低到高进行排序
    endArray.sort((a, b) => {
        return a[1] - b[1];
    });
    let res = 0;
    let day = 1; // 当前天数
    let endIdx = 0; // endArray 的索引，endIdx 之后的苹果都是未过期的
    while (endIdx < endArray.length) {
        // 若苹果个数为0 或者 当前苹果已过期
        while (endIdx < endArray.length && (apples[endArray[endIdx][0]] === 0 || day > endArray[endIdx][1])) {
            // 苹果已过期则把苹果全去掉
            if (day > endArray[endIdx][1]) {
                apples[endArray[endIdx][0]] = 0;
            }
            ++endIdx;
        }
        // 寻找已生成的未过期苹果中，最快过期的苹果
        let idx = endIdx;
        while (idx < endArray.length && day <= endArray[idx][0]) {
            ++idx;
        }
        // 若存在已生成的未过期苹果，则把在endArray[idx][0]天中生成的苹果个数减1，并把吃苹果个数+1
        if (idx < endArray.length && day > endArray[idx][0] && day <= endArray[idx][1] && apples[endArray[idx][0]] > 0) {
            --apples[endArray[idx][0]];
            ++res;
        }
        // 天数 +1
        ++day;
    }
    return res;
};