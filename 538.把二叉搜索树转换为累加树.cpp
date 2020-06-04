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
    // 先遍历右子树

    int sum = 0;

    TreeNode* convertBST(TreeNode* root) {
        inOrder(root);
        return root;
    }

    void inOrder(TreeNode* root){
        if(!root)
            return;
        inOrder(root->right);
        sum += root->val;
        root->val = sum;
        inOrder(root->left);
    }
};