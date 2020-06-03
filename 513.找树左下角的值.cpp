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
    int findBottomLeftValue(TreeNode* root) {
        // 从右往左层次遍历
        queue<TreeNode*> q;
        q.push(root);
        TreeNode* t;
        while(!q.empty()){
            t = q.front();
            q.pop();
            if(t->right)
                q.push(t->right);
            if(t->left)
                q.push(t->left);
        }
        return t->val;
    }
};