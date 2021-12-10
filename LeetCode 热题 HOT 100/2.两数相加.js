/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let head = l1;
    let pre = null;
    let c = 0; // 进位
    while (l1 !== null && l2 !== null) {
        let temp = l1.val + l2.val + c;
        l1.val = temp % 10;
        c = Math.floor(temp / 10);
        pre = l1;
        l1 = l1.next;
        l2 = l2.next;
    }
    if (l2 !== null) {
        pre.next = l2;
        l1 = l2;
    }
    while (l1 !== null) {
        let temp = l1.val + c;
        l1.val = temp % 10;
        c = Math.floor(temp / 10);
        pre = l1;
        l1 = l1.next;
    }
    if (c !== 0) {
        pre.next = new ListNode(c);
    }
    return head;
};