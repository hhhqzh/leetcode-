/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    let n = 0,
        p = head;
    while (p !== null) {
        ++n;
        p = p.next;
    }
    if (k === 0 || k % n === 0) {
        return head;
    }
    k %= n;
    k = n - k;
    if (n <= 1 || k === 0) {
        return head;
    }
    console.log(k, n)
    let newHead = head;
    p = null;
    while (k--) {
        p = newHead;
        newHead = newHead.next;
    }
    p.next = null;
    let q = newHead;
    while (q && q.next !== null) {
        q = q.next;
    }
    q.next = head;
    return newHead;
};