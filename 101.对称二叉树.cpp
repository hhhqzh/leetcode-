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
    vector<int> pre, post;
    
    bool isSymmetric(TreeNode* root) {
        if(!root || (!root->left && !root->right))
            return true;
        // 构建先序和后序序列
        preOrder(root->left);
        postOrder(root->right);
        // 如果先序序列和后序序列相等则是对称二叉树
        if(pre.size() != post.size())
            return false;
        for(int i=0; i<pre.size(); ++i){
            if(pre[i] != post[i])
                return false;
        }
        return true;
        
        // return is(root, root);
    }
    
    void preOrder(TreeNode *root){
        if(root){
            pre.push_back(root->val);
            if(root->left || root->right){
                preOrder(root->left);
                preOrder(root->right);
            }
        } else {
            pre.push_back(-1);
        }
    }
    
    void postOrder(TreeNode *root){
        if(root){
            post.push_back(root->val);
            if(root->left || root->right){
                postOrder(root->right);
                postOrder(root->left);
            }
        } else {
            post.push_back(-1);
        }
    }

    // 递归
    // bool is(TreeNode *p, TreeNode* q){
    //     if(!p && !q)
    //         return true;
    //     if(!p || !q)
    //         return false;
    //     return (p->val == q->val) && is(p->left, q->right) && is(p->right, q->left);
    // }
};