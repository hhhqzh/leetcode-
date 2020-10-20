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
    public void reorderList(ListNode head) {
        if(head == null)
            return;
        ListNode slow = head;
        ListNode fast = head.next;
        while(fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;
        }
        ListNode p = head;
        ListNode q = reverse(slow.next);
        slow.next = null;
        ListNode s = head;
        while(q != null){
            ListNode temp = q.next;
            q.next = s.next;
            s.next = q;
            s = s.next.next;
            q = temp;
        }
        return;
    }

    public ListNode reverse(ListNode head){
        ListNode pre = null;
        ListNode p = head;
        while(p != null){
            ListNode q = p.next;
            p.next = pre;
            pre = p;
            p = q;
        }
        return pre;
    }
}