/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

// 链表
class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next
    }
}

var findTheWinner = function (n, k) {
    let head = new Node(1),
        pre = head;
    for (let i = 2; i <= n; ++i) {
        let node = new Node(i);
        pre.next = node;
        pre = node;
    }
    pre.next = head;
    let temp = 0;
    while (n > 1) {
        ++temp;
        if (temp === k) {
            --n;
            temp = 0;
            pre.next = pre.next.next;
        } else {
            pre = pre.next;
        }
    }
    return pre.val;
};

// 队列
var findTheWinner = function (n, k) {
    let arr = [];
    for (let i = 1; i <= n; ++i) {
        arr.push(i);
    }
    while (arr.length > 1) {
        for (let i = 1; i < k; ++i) {
            arr.push(arr.shift());
        }
        arr.shift();
    }
    return arr[0];
};