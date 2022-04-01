/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 迭代
var deleteDuplicates = function (head) {
    let newHead = new ListNode(Number.MIN_SAFE_INTEGER, head);
    let pre = newHead,
        q = head;
    let flag = false;
    while (q !== null) {
        if (q.next !== null && q.val === q.next.val) {
            flag = true;
        } else {
            if (flag) {
                pre.next = q.next;
            } else {
                pre.next = q;
                pre = pre.next;
            }
            flag = false;
        }
        q = q.next;
    }
    return newHead.next;
};

// 递归
var deleteDuplicates = function (head) {
    if (head === null || head.next === null) {
        return head;
    }
    let next = head.next;
    if (head.val === next.val) {
        while (next !== null && head.val === next.val) {
            next = next.next;
        }
        head = deleteDuplicates(next);
    } else {
        head.next = deleteDuplicates(next);
    }
    return head;
};