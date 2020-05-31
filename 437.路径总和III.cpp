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
    // 双重递归 
    int s = 0;

    int pathSum(TreeNode* root, int sum) {
        if(!root)
            return 0;
        Sum(root, sum);
        pathSum(root->left, sum);
        pathSum(root->right, sum);
        return s;
    }
    
    void Sum(TreeNode* root, int sum){
        if(!root)
            return;
        // 这里要注意不能return，后面相加结果可能为0
        if(root->val == sum){
            ++s;
        }
        Sum(root->left, sum - root->val);
        Sum(root->right, sum - root->val);
    }
};