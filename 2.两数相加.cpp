/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        int c = 0;
        ListNode* head = new ListNode(-1);
        ListNode* s = head;
        while(l1 && l2){
            int sum = l1->val + l2->val + c;
            ListNode* q = new ListNode(sum % 10);
            c = sum / 10;
            s->next = q;
            s = q;
            l1 = l1->next;
            l2 = l2->next;
        }
        while(l1){
            int sum = l1->val + c;
            ListNode* q = new ListNode(sum % 10);
            c = sum / 10;
            s->next = q;
            s = q;
            l1 = l1->next;
        }
        while(l2){
            int sum = l2->val + c;
            ListNode* q = new ListNode(sum % 10);
            c = sum / 10;
            s->next = q;
            s = q;
            l2 = l2->next;
        }
        if(c){
            ListNode* q = new ListNode(c);
            s->next = q;
        }
        return head->next;
    }
};