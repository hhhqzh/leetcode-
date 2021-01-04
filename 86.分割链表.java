/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode partition(ListNode head, int x) {
        if(head == null)
            return null;
        ListNode p = new ListNode(-1);
        ListNode t = p;
        p.next = head;
        ListNode pre = p;
        ListNode q = head;
        while(q != null && q.val < x){
            p = p.next;
            pre = pre.next;
            q = q.next;
        }
        while(q != null){
            if(q.val < x){
                pre.next = q.next;
                q.next = p.next;
                p.next = q;
                q = pre.next;
                p = p.next;
            } else {
                pre = q;
                q = q.next;
            }
        }
        return t.next;
    }
}