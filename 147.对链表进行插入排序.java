/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode insertionSortList(ListNode head) {
        if(head == null || head.next == null)
            return head;
        ListNode p = head.next, q = head;
        ListNode newHead = new ListNode(-1);
        newHead.next = head;
        ListNode  pre;
        while(p != null){
            pre = newHead;
            while(pre.next != p && pre.next.val < p.val)
                pre = pre.next;
            if(pre.next == p){
                q = p;
                p = p.next;
                continue;
            }
            if(p.next == null){
                q.next = null;
            } else {
                q.next = p.next;
            }
            p.next = pre.next;
            pre.next = p;
            p = q.next;
        }
        return newHead.next;
    }
}

// 利力扣大佬题解，简介
class Solution {
    public ListNode insertionSortList(ListNode head) {
        ListNode dummy = new ListNode(0), pre;
        dummy.next = head;
        
        while(head != null && head.next != null) {
            if(head.val <= head.next.val) {
                head = head.next;
                continue;
            }
            pre = dummy;
            
            while (pre.next.val < head.next.val) pre = pre.next;
            
            ListNode curr = head.next;
            head.next = curr.next;
            curr.next = pre.next;
            pre.next = curr;
        }
        return dummy.next;
    }
}