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
    int count = 0, s=0;

    void dfs(TreeNode* root, int sum){
        if(!root)
            return;
        s += root->val;
        if(!root->left && !root->right){
            if(s == sum)
                ++count;
            s -= root->val;
            return;
        }
        if(root->left){
            dfs(root->left, sum);
        }
        if(root->right){
            dfs(root->right, sum);
        }
        s -= root->val;
    }

    bool hasPathSum(TreeNode* root, int sum) {
        dfs(root, sum);
        return count;
    }
};