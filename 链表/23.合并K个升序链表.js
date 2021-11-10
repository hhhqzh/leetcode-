/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length === 0)
        return null;
    let head = new ListNode(-1);
    head.next = lists[0];
    let pre = head,
        list1 = head.next;
    for (let i = 1; i < lists.length; ++i) {
        let list2 = lists[i];
        while (list1 !== null && list2 !== null) {
            if (list1.val > list2.val) {
                let s = list2.next;
                pre.next = list2;
                list2.next = list1;
                list2 = s;
                pre = pre.next;
            } else {
                pre = list1;
                list1 = list1.next;
            }
        }
        if (list2 !== null) {
            pre.next = list2;
        }
        list1 = head.next;
    }
    return head.next;
};