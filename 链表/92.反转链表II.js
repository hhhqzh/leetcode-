/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    let newHead = new ListNode(0, head),
        pre = newHead,
        p = head,
        count = 1;
    while (count < left) {
        pre = p;
        p = p.next;
        ++count;
    }
    let q = null,
        s;
    while (count < right) {
        s = p.next;
        p.next = q;
        q = p;
        p = s;
        ++count;
    }
    s = p.next;
    p.next = q;
    pre.next = p;
    while (p && p.next !== null) {
        p = p.next;
    }
    p.next = s;
    return newHead.next;
};