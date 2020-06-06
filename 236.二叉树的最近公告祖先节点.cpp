/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */

/**
 * 如果root == NULL || root == q || root == p直接返回root，表示当前已root为根的（子）树已经查找完成。
 * 1、左右子树返回为空，则pq均不在已root为根的书中，返回NULL
 * 2、左右子树返回非空，则返回对应的值为p和q，直接返回root为LCA
 * 3、若左右子树返回其中一个非空，则表明p和q同时存在于左或右子树中，最先找到的那个节点为LCA
 */
class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        if(!root || root == q || root == p)
            return root;
        TreeNode* left = lowestCommonAncestor(root->left, p, q);
        TreeNode* right = lowestCommonAncestor(root->right, p, q);
        if(!left && !right)
            return NULL;
        else if(left && right)
            return root;
        else 
            return left != NULL? left: right;
    }
};