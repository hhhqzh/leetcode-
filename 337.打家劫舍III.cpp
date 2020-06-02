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
    int rob(TreeNode* root) {
        // 递归超时
        // if(!root)
        //     return 0;
        // int val = root->val;
        // if(root->left)
        //     val += rob(root->left->left) + rob(root->left->right);
        // if(root->right)
        //     val += rob(root->right->left) + rob(root->right->right);
        // return max(val, rob(root->left) +rob(root->right));

        // 遍历每一颗子树，每颗子树返回两个值
        // 分别是包含根节点的最大值和不包含根节点的最大值
        auto res = helper(root);
        return max(res[0], res[1]);
    }

    vector<int> helper(TreeNode* root){
        if(!root)
            return {0, 0};
        auto left = helper(root->left);
        auto right = helper(root->right);
        return {max(left[0], left[1]) + max(right[0], right[1])}, root->val + left[0] + right[0]};
    }
};