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
    int path = 0;

    int longestUnivaluePath(TreeNode* root) {
        dfs(root);
        return path;
    }

    int dfs(TreeNode* root){
        if(!root)
            return 0;
        int left = dfs(root->left);
        int right = dfs(root->right);
        left = root->left && root->val == root->left->val? left+1: 0;
        right = root->right && root->val == root->right->val? right+1: 0;
        path = max(path, left+right);
        return max(left, right);
    }
};