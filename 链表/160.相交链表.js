/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let m = 0,
        n = 0;
    let p = headA,
        q = headB;
    while (p !== null) {
        p = p.next;
        ++m;
    }
    while (q != null) {
        q = q.next;
        ++n;
    }
    if (m > n) {
        let t = m - n;
        while (t--) {
            headA = headA.next;
        }
    } else {
        let t = n - m;
        while (t--) {
            headB = headB.next;
        }
    }
    while (headA && headB) {
        if (headA === headB) {
            return headA;
        }
        headA = headA.next;
        headB = headB.next;
    }
    return null;
};

// 牛逼！！！
var getIntersectionNode = function (headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }
    let pA = headA,
        pB = headB;
    while (pA !== pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
};