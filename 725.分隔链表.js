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
 * @return {ListNode[]}
 */
 var splitListToParts = function (head, k) {
    let node = head;
    let n = 0;
    let res = [];
    while (node) {
        ++n;
        node = node.next;
    }
    // if (k > n) {
    //     for (let i = 0; i < k; ++i) {
    //         if (head) {
    //             let t = head;
    //             head = head.next;
    //             t.next = null;
    //             res.push(t);
    //         } else {
    //             res.push(null);
    //         }
    //     }
    // } else {
    let [a, b] = [Math.floor(n / k), n % k];
    while (k--) {
        let t = head;
        for (let i = 1; i < a; ++i) {
            t = t.next;
        }
        if (a !== 0 && b > 0) {
            t = t.next;
            --b;
        }
        let p = t === null ? null : t.next;
        if (t !== null)
            t.next = null;
        res.push(head);
        head = p;
    }
    // }
    return res;
};