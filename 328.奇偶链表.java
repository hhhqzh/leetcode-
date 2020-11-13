/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode oddEvenList(ListNode head) {
        if(head == null)
            return head;
        ListNode p = head;
        ListNode cur = head, pre;
        while(cur != null && cur.next != null && cur.next.next != null){
            pre = cur.next;
            cur = pre.next;
            pre.next = cur.next;
            cur.next = p.next;
            p.next = cur;
            cur = pre;
            p = p.next;
        }
        return head;
    }
}