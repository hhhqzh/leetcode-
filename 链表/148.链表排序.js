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
var sortList = function (head) {
    let n = 0;
    // 计算链表长度
    let p = head;
    while (p !== null) {
        p = p.next;
        ++n;
    }
    if (n <= 1) {
        return head;
    }
    let head1 = head,
        head2, pre = head;
    let i = 0;
    while (i < Math.floor(n / 2)) {
        pre = head;
        head = head.next;
        ++i;
    }
    pre.next = null;
    head2 = head;
    head1 = sortList(head1);
    head2 = sortList(head2);
    return merge(head1, head2);
};

var merge = (head1, head2) => {
    let head = new ListNode(),
        pre = head;
    head.next = head1;
    while (head1 !== null && head2 !== null) {
        if (head1.val > head2.val) {
            let next = head2.next;
            pre.next = head2;
            head2.next = head1;
            head2 = next;
            pre = pre.next;
        } else {
            pre = head1;
            head1 = head1.next;
        }
    }
    if (head2 !== null) {
        pre.next = head2;
    }
    return head.next;
}