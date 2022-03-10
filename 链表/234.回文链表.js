/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let slow = head,
        fast = head;
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let pre = null,
        p = slow.next;
    slow.next = null;
    while (p !== null) {
        let s = p.next;
        p.next = pre;
        pre = p;
        p = s;
    }
    console.log(head, pre)
    while (pre !== null && head !== null) {
        if (pre.val !== head.val) {
            return false;
        }
        pre = pre.next;
        head = head.next;
    }
    return true;
};