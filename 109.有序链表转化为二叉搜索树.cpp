/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    TreeNode* sortedListToBST(ListNode* head) {
       // 使用快慢指针找出链表的中间节点，递归 
        if(!head)
            return NULL;
        if(!head->next)
            return new TreeNode(head->val);
        ListNode* pre = head;
        ListNode* p = pre->next;
        ListNode* q = p->next;
        while(q && q->next){
            pre = pre->next;
            p = pre->next;
            q = q->next->next;
        }
        pre->next = NULL; // 断开链表
        TreeNode* node = new TreeNode(p->val);
        node->left = sortedListToBST(head);
        node->right = sortedListToBST(p->next);
        return node;
    }
};