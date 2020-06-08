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
    int min = 1000;
    TreeNode* pre = NULL;

    int getMinimumDifference(TreeNode* root) {
        inOrder(root);
        return min;
    }

    void inOrder(TreeNode* root){
        if(!root)   return;
        inOrder(root->left);
        if(pre){
            min = root->val - pre->val < min ? root->val - pre->val : min;
        }
        pre = root;
        inOrder(root->right);
    }
};