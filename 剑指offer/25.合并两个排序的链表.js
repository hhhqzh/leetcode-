/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 迭代
var mergeTwoLists = function (l1, l2) {
    let l = new ListNode(0);
    l.next = l1;
    let p = l;
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            p = l1;
            l1 = l1.next;
        } else {
            let s = l2.next;
            p.next = l2;
            l2.next = l1;
            l2 = s;
            p = p.next;
        }
    }

    if (l2 != null) {
        p.next = l2;
    }

    return l.next;
};

// 递归！！牛逼！！！
var mergeTwoLists = function (l1, l2) {
    if (l1 === null)
        return l2;
    if (l2 === null)
        return l1;
    if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};