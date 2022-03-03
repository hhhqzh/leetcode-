var eliminateMaximum = function (dist, speed) {
    let time = [];
    for (let i = 0; i < dist.length; ++i) {
        time.push(Math.ceil(dist[i] / speed[i]));
    }
    let res = 0,
        cur = 0;
    time.sort((a, b) => {
        return a - b;
    });
    for (let t of time) {
        if (t <= cur) {
            break;
        }
        ++res;
        ++cur;
    }
    return res;
}