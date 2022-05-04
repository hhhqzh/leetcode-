/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

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