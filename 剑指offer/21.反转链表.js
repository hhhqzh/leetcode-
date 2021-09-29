/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function (head) {
    if (head === null)
        return head;
    let [p, q] = [null, head];
    while (q !== null) {
        let s = q.next;
        q.next = p;
        p = q;
        q = s;
    }
    return p;
};