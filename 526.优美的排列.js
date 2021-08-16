/**
 * @param {number} n
 * @return {number}
 */
 var countArrangement = function(n) {
    // const vis = new Array(n + 1).fill(false);
    const match = new Array(n + 1).fill(0).map(() => {return new Array();});
    let res = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i % j === 0 || j % i === 0) {
                match[i].push(j);
            }
        }
    }

    const backtrack = (index, n) => {
        if (index === n + 1) {
            ++res;
            return;
        }
        for (const x of match[index]) {
            if (!(cover && (i << (i - 1)))) {
                // vis[x] = true;
                cover |= i << (i - 1);
                backtrack(index + 1, n);
                cover &= ~(1 << (i - 1));
                // vis[x] = false;
            }
        }
    }
    
    backtrack(1, n);
    return res;
};

/**
 * @param {number} n
 * @return {number}
 * 
 * 状态压缩
 * 用一个位数为 nnn 的二进制数 cover 表示排列中的数被选取的情况。
 */
 var countArrangement = function(n) {
    // const vis = new Array(n + 1).fill(false);
    let cover = 0;
    const match = new Array(n + 1).fill(0).map(() => {return new Array();});
    let res = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i % j === 0 || j % i === 0) {
                match[i].push(j);
            }
        }
    }

    const backtrack = (index) => {
        if (index > n) {
            ++res;
            return;
        }
        for (let i = 1; i <= n; ++i) {
            if (!(cover & (1 << (i - 1)))) {
                // vis[i] = true;
                cover = cover | (1 << (i - 1));
                backtrack(index + 1);
                cover = cover ^ (1 << (i - 1));
                // vis[i] = false;
            }
        }
    }
    
    backtrack(1);
    return res;
};

