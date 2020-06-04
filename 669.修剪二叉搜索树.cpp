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
    TreeNode* trimBST(TreeNode* root, int L, int R) {
        if(!root)   return NULL;
        if(root->val >= L && root->val <= R){
            root->left = trimBST(root->left, L, R);
            root->right = trimBST(root->right, L, R);
        } else if (root->val < L){
            root = trimBST(root->right, L, R);
        } else {
            root = trimBST(root->left, L, R);
        }
        return root;
    }
};