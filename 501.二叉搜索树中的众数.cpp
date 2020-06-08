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
    vector<int> maxCntNums;
    int cur = 1;
    int max = 1;
    TreeNode* pre = NULL;

    vector<int> findMode(TreeNode* root) {
        inOrder(root);
        return maxCntNums;
    }

    void inOrder(TreeNode* root){
        if(!root)   return;
        inOrder(root->left);
        if(pre){
            if(pre->val == root->val)
                ++cur;
            else
                cur = 1;
        }
        if(cur > max) {
            max = cur;
            // 清空数组 
            maxCntNums.clear();
            maxCntNums.push_back(root->val);
        } else if (cur == max) {
            maxCntNums.push_back(root->val);
        }
        pre = root;
        inOrder(root->right);
    }
};