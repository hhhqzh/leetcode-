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
var detectCycle = function (head) {
    if (head === null)
        return null;
    let slow = head,
        fast = head;
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        // 此时 fast 比 slow 走多一圈
        // 使用一个 p 从头开始与 slow 一起走，走到同一个节点则该节点是环的头
        if (slow === fast) {
            let p = head;
            while (p !== slow) {
                p = p.next;
                slow = slow.next;
            }
            return slow;
        }
    }
    return null;
};

// 增加一个属性判断是否访问过
var detectCycle = function (head) {
    if (head === null)
        return null;
    let p = head;
    while (p !== null) {
        if (p.isVisit) {
            return p;
        }
        p.isVisit = true;
        p = p.next;
    }
    return null;
};