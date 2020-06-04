/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int val;
    int cnt = 0;
    // 中序遍历
    int kthSmallest(TreeNode* root, int k) {
        inOrder(root, k);
        return val;
    }

    void inOrder(TreeNode* root, int k){
        if(!root)   return;
        inOrder(root->left, k);
        ++cnt;
        if(cnt == k){
            val = root->val;
            return;
        }
        inOrder(root->right, k);
    }
};