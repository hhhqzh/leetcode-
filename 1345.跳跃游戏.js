// bfs + map + visit超时
var minJumps = function (arr) {
    let n = arr.length;
    let res = 0;
    let map = new Map();
    for (let i = 0; i < arr.length; ++i) {
        if (map.has(arr[i])) {
            map.get(arr[i]).push(i);
            map.set(arr[i], map.get(arr[i]));
        } else {
            map.set(arr[i], [i]);
        }
    }
    let visit = new Array(n).fill(false);
    let queue = [0];
    visit[0] = true;
    while (queue.length) {
        let size = queue.length;
        while (size--) {
            let cur = queue.shift();
            if (cur === n - 1) {
                return res;
            }
            if (cur - 1 >= 0 && !visit[cur - 1]) {
                queue.push(cur - 1);
                visit[cur - 1] = true;
            }
            if (cur + 1 < n && !visit[cur + 1]) {
                queue.push(cur + 1);
                visit[cur + 1] = true;
            }
            let temp = map.get(arr[cur]);
            for (let t of temp) {
                if (t !== cur && !visit[t]) {
                    queue.push(t);
                    visit[t] = true;
                }
            }
        }
        ++res;
    }
    return res;
};

// bfs + map + visit
// 下标大的先插入 queue，可减少时间
var minJumps = function (arr) {
    let n = arr.length;
    if (n === 1) {
        return 0;
    }
    let map = new Map();
    // 倒序插入 map，相当于给 queue 增加一个同层「下标越大，优先出队」的作用
    for (let i = n - 1; i >= 0; --i) {
        if (!map.has(arr[i])) {
            map.set(arr[i], []);
        }
        map.get(arr[i]).push(i);
    }
    let visit = new Array(n).fill(false);
    // 队列里存的是下标和该下标当前的步数
    let queue = [
        [0, 0]
    ];
    visit[0] = true;
    while (queue.length) {
        let [cur, step] = queue.shift();
        if (cur + 1 === n - 1) {
            return step + 1;
        }
        // i + 1
        if (cur + 1 < n && !visit[cur + 1]) {
            queue.push([cur + 1, step + 1]);
            visit[cur + 1] = true;
        }
        // i- 1
        if (cur - 1 > 0 && !visit[cur - 1]) {
            queue.push([cur - 1, step + 1]);
            visit[cur - 1] = true;
        }
        // arr[i] === arr[j]
        if (map.has(arr[cur])) {
            let temp = map.get(arr[cur]);
            for (let t of temp) {
                if (t !== cur && !visit[t]) {
                    if (t === n - 1) {
                        return step + 1;
                    }
                    queue.push([t, step + 1]);
                    visit[t] = true;
                }
            }
            // 上面的循环已经把等于 arr[cur] 的数全部访问了，所以可以直接删除 
            map.delete(arr[cur]);
        }
    }
    return -1;
};