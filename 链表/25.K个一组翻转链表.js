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
var reverseKGroup = function (head, k) {
    let newHead = new ListNode();
    newHead.next = head;
    let preHead = newHead,
        nextHead = newHead.next;
    while (nextHead !== null) {
        let i = 0,
            p = preHead;
        while (p !== null && i < k) {
            p = p.next;
            ++i;
        }
        if (p === null) {
            return newHead.next;
        }
        nextHead = p.next;
        // 翻转局部链表
        p = preHead.next;
        let s = nextHead,
            temp = p;
        while (p !== null && p !== nextHead) {
            let q = p.next
            p.next = s;
            s = p;
            p = q;
        }
        preHead.next = s;
        preHead = temp;
    }
    return newHead.next;
};