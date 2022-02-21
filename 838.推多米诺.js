/**
 * @param {string} dominoes
 * @return {string}
 */
// 模拟
var pushDominoes = function (dominoes) {
    dominoes = dominoes.split('');
    let n = dominoes.length;
    for (let i = 0; i < n; ++i) {
        if (dominoes[i] === 'L') {
            let j = i - 1;
            while (j >= 0 && dominoes[j] === '.') {
                dominoes[j] = 'L';
                --j;
            }
        } else if (dominoes[i] === 'R') {
            let j = i + 1;
            while (j < n && (dominoes[j] === '.' || dominoes[j] === 'R')) {
                if (dominoes[j] === 'R') {
                    i = j;
                } else {
                    dominoes[j] = 'R';
                }
                ++j;
            }
            if (j === n) {
                break;
            }
            if (dominoes[j] === 'L') {
                let l = i + 1,
                    r = j - 1;
                while (l < r) {
                    dominoes[r] = 'L';
                    ++l;
                    --r;
                }
                if (l === r) {
                    dominoes[l] = '.';
                }
                i = j;
            }
        }
    }
    return dominoes.join('');
};

// BFS JS超时
var pushDominoes = function (dominoes) {
    dominoes = dominoes.split('');
    let n = dominoes.length;
    // 第几次受力
    let g = new Array(n).fill(0);
    let queue = new Array();
    for (let i = 0; i < dominoes.length; ++i) {
        if (dominoes[i] !== '.') {
            // 方向
            let dire = dominoes[i] === 'L' ? -1 : 1;
            queue.push([i, 1, dire]); // [位置，时刻，方向]
            g[i] = 1;
        }
    }
    while (queue.length) {
        let [loc, time, dire] = queue.shift();
        let next = loc + dire;
        if (dominoes[loc] === '.' || next < 0 || next >= n) {
            continue;
        }
        // 首次受力
        if (g[next] === 0) {
            queue.push([next, time + 1, dire]);
            g[next] = time + 1;
            dominoes[next] = dire === -1 ? 'L' : 'R';
        } else if (g[next] === time + 1) { // 多次受力
            dominoes[next] = '.'
        }
    }
    return dominoes.join('');;
}