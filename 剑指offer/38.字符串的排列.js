/**
 * @param {string} s
 * @return {string[]}
 */

// 回溯
var permutation = function (s) {
    let res = new Array();
    let visited = new Array(s.length).fill(0);
    const list = [];

    const back = (s, visited, list) => {
        if (list.length === s.length && res.indexOf(list.join('')) == -1) {
            res.push(list.join(''));
            return;
        }

        for (let i = 0; i < s.length; ++i) {
            if (!visited[i]) {
                list.push(s[i]);
                visited[i] = 1;
                back(s, visited, list);
                list.pop();
                visited[i] = 0;
            }
        }
    };

    back(s, visited, list);
    return res;
};

// 全排列
var permutation = function (s) {
    let res = [];
    let arr = s.split('');

    const Permutation = (arr, start) => {
        if (start === arr.length - 1) {
            if (res.indexOf(arr.join('')) === -1)
                res.push(arr.join(''));
            return;
        }
        for (let i = start; i < arr.length; ++i) {
            swap(arr, start, i);
            Permutation(arr, start + 1);
            swap(arr, start, i);
        }
    }

    const swap = (arr, i, j) => {
        let t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }

    Permutation(arr, 0);
    return res;
}