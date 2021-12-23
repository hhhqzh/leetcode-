/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let newHead = new ListNode(-1);
    newHead.next = head;
    let p = newHead,
        q = newHead;
    while (n--) {
        q = q.next;
    }
    while (q !== null && q.next !== null) {
        p = p.next;
        q = q.next;
    }
    p.next = p.next.next;
    return newHead.next;
};