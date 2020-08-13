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
    vector<string> binaryTreePaths(TreeNode* root) {
        vector<string> res;
        if(root == NULL)
            return res;
        dfs(root, "", res);
        return res;
    }

    void dfs(TreeNode* root, string s, vector<string>& res){
        s += to_string(root->val);
        if(!root->left && !root->right){
            res.push_back(s);
            return;
        }
        if(root->left)
            dfs(root->left, s + "->", res);
        if(root->right)
            dfs(root->right, s + "->", res);
    }
};