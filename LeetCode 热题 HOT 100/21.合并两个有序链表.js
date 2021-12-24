/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let head = new ListNode(-1);
    head.next = list1;
    let pre = head;
    while (list1 !== null && list2 !== null) {
        if (list1.val > list2.val) {
            let p = list2.next;
            pre.next = list2;
            list2.next = list1;
            list2 = p;
        } else {
            list1 = list1.next;
        }
        pre = pre.next;
    }
    if (list2 !== null) {
        pre.next = list2;
    }
    return head.next;
};