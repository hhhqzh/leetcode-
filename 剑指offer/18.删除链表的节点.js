/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function(head, val) {
    let newHead = new ListNode(-1);
    newHead.next = head;
    let [p, q] = [head, newHead];
    while (p !== null) {
        if (p.val === val) {
            q.next = p.next;
            break;
        }
        q = p;
        p = p.next;
    }
    return newHead.next;
};